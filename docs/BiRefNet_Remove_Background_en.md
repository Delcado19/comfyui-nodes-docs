# Documentation  
- Class name: BiRefNet_Remove_Background  
- Category: BiRefNet🌟  
- Output node: False 
- Repo Ref: https://github.com/moon7star9/ComfyUI_BiRefNet_Universal

BiRefNet_Remove_Background node is a processing node for image background removal. It receives a loaded BiRefNet model and an input image, uses deep learning to accurately segment foreground and background, and optionally refines the foreground. The node supports multiple background options, including transparent and various solid colors, and offers foreground refinement to improve edge quality.

# Input types  
## Required  
- model  
- The 'model' parameter receives the model instance output from the BiRefNet_Loader node, containing the pretrained model and its configuration.
    - Comfy dtype: BIREFNET_MODEL  
    - Python dtype: dict  
- image  
- The 'image' parameter is the input image to process. The node automatically resizes the image to match the model's optimal working resolution.
    - Comfy dtype: IMAGE  
    - Python dtype: torch.Tensor  
- background_color  
- The 'background_color' parameter lets users choose the output background type: transparent or a specified solid color (white, black, green, blue, red).
    - Comfy dtype: COMBO  
    - Python dtype: str  
- use_refine  
- The 'use_refine' parameter controls whether to use foreground refinement. Enabling this option improves edge quality but may slightly increase processing time.
    - Comfy dtype: BOOLEAN  
    - Python dtype: bool  

# Output types  
- IMAGE  
- The output is the processed image, which may be RGBA (transparent background) or RGB (solid background) depending on the chosen background type.
    - Comfy dtype: IMAGE  
    - Python dtype: torch.Tensor  
- MASK  
- The output segmentation mask is a binary image indicating the foreground area. This mask can be used for further processing by other nodes.
    - Comfy dtype: MASK  
    - Python dtype: torch.Tensor  

# Usage tips  
- Infra type: GPU/CPU  
- Recommended to run on GPU for better performance.
- When using the transparent background option, the output will be in RGBA format.
- Enabling foreground refinement improves edge quality, especially for complex edge details.
- The output mask can be used as a mask input for other image processing nodes.

# Source code  
```python  
class BiRefNet_Remove_Background:  
    @classmethod  
    def INPUT_TYPES(cls):  
        return {  
            "required": {  
                "model": ("BIREFNET_MODEL",),  
                "image": ("IMAGE",),  
                "background_color": (["transparency"] + ["white", "black", "green", "blue", "red"], {"default": "transparency"}),
                "use_refine": ("BOOLEAN", {"default": True})  
            }  
        }  

    RETURN_TYPES = ("IMAGE", "MASK")  
    RETURN_NAMES = ("image", "mask")  
    FUNCTION = "inference"  
    CATEGORY = "BiRefNet🌟"  

    def inference(self, image, model, background_color, use_refine):  
        model_data = model  
        model = model_data["model"]  
        device = model_data["device"]  
        use_half_precision = model_data["half_precision"]  
        resolution = model_data["resolution"]  # 直接使用模型的最佳分辨率  

        preprocessor = ImagePreprocessor(resolution)  
        processed_images = []  
        processed_masks = []  

        for img in image:  
            # 转换为PIL图像  
            orig_image = Image.fromarray(np.clip(255. * img.cpu().numpy().squeeze(), 0, 255).astype(np.uint8))  
            w, h = orig_image.size  
            
            # 预处理  
            image_tensor = preprocessor(orig_image.convert('RGB')).unsqueeze(0)  
            if use_half_precision:  
                image_tensor = image_tensor.half()  
            image_tensor = image_tensor.to(device)  

            # 推理  
            with torch.no_grad():  
                preds = model(image_tensor)[-1].sigmoid().cpu()  

            pred = preds[0].squeeze()
            pred_pil = transforms.ToPILImage()(pred)
            mask = pred_pil.resize((w, h))
            

            # 选择应用前景优化  
            if use_refine:  
                refined_image = refine_foreground(orig_image, pred_pil, r=90)  # 使用固定的r值即可（实验验证过调整r值对结果影响很小） 

            # 设置背景和前景  

            if background_color == "transparency":  
                result_image = Image.new("RGBA", (w, h), (0, 0, 0, 0))  
                result_image.paste(refined_image if use_refine else orig_image, mask=mask)
            else:  
                result_image = Image.new("RGB", (w, h), background_color)  
                result_image.paste(refined_image if use_refine else orig_image, mask=mask)
            
            # 转换回tensor  
            processed_images.append(torch.from_numpy(np.array(result_image).astype(np.float32) / 255.0).unsqueeze(0)) 
            processed_masks.append(torch.from_numpy(np.array(mask).astype(np.float32) / 255.0).unsqueeze(0))  

        return torch.cat(processed_images, dim=0), torch.cat(processed_masks, dim=0)  