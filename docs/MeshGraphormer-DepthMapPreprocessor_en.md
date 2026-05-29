
# Documentation
- Class name: MeshGraphormer-DepthMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MeshGraphormer-DepthMapPreprocessor node is designed to refine hand depth maps and predict 2D joint positions in image space using a Graphormer-based model. It processes input images to generate enhanced depth maps and corresponding masks, leveraging deep learning techniques to improve the accuracy of hand pose estimation.

# Input types
## Required
- image
    - The input image to be processed for hand depth map refinement and 2D joint position prediction. It is the primary data source for the node's operations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- mask_bbox_padding
    - This parameter defines the padding around the detected hand bounding box for mask generation, affecting the size and coverage of the output mask. It ensures the mask adequately encloses the hand region for accurate depth map refinement.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - Specifies the resolution for processing the input image. This parameter affects the level of detail in the generated depth map and mask.
    - Comfy dtype: INT
    - Python dtype: int
- mask_type
    - Specifies the method for generating the mask from the depth map, providing options such as 'based_on_depth' (depth-based mask), 'tight_bboxes' (tight bounding box-based mask), and 'original' (use the original mask). This choice influences the mask generation strategy and the final output quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- mask_expand
    - Determines the expansion size of the mask beyond its original boundaries, affecting the coverage area of the mask in the output. This parameter allows fine-tuning of the mask size for better depth map refinement.
    - Comfy dtype: INT
    - Python dtype: int
- rand_seed
    - A random seed used to ensure reproducibility during the mask and depth map generation process. It helps maintain consistency when running the node multiple times with the same input.
    - Comfy dtype: INT
    - Python dtype: int
- detect_thr
    - The detection threshold for the Graphormer model, determining the sensitivity of hand detection in the input image. This parameter affects the model's ability to accurately identify hands under various conditions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- presence_thr
    - The presence threshold for the Graphormer model, influencing the model's confidence in the presence of detected hands in the input image. It plays an important role in ensuring the reliability of depth map and 2D joint predictions.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- IMAGE
    - Refined depth maps for each detected hand in the input image, providing enhanced detail and accuracy for hand pose estimation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- INPAINTING_MASK
    - Generated masks corresponding to the detected hands in the input image, used to isolate hand regions during depth map refinement.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)



## Source code
```python
class Mesh_Graphormer_Depth_Map_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        types = create_node_input_types(mask_bbox_padding=("INT", {"default": 30, "min": 0, "max": 100}))
        types["optional"].update(
            {
                "mask_type": (["based_on_depth", "tight_bboxes", "original"], {"default": "based_on_depth"}),
                "mask_expand": ("INT", {"default": 5, "min": -MAX_RESOLUTION, "max": MAX_RESOLUTION, "step": 1}),
                "rand_seed": ("INT", {"default": 88, "min": 0, "max": 0xffffffffffffffff}),
                "detect_thr": ("FLOAT", {"default": 0.6, "min": 0, "max": 1, "step": 0.01}),
                "presence_thr": ("FLOAT", {"default": 0.6, "min": 0, "max": 1, "step": 0.01}),
            }
        )
        return types

    RETURN_TYPES = ("IMAGE", "MASK")
    RETURN_NAMES = ("IMAGE", "INPAINTING_MASK")
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Normal and Depth Estimators"

    def execute(self, image, mask_bbox_padding=30, mask_type="based_on_depth", mask_expand=5, resolution=512, rand_seed=88, detect_thr=0.6, presence_thr=0.6, **kwargs):
        install_deps()
        from controlnet_aux.mesh_graphormer import MeshGraphormerDetector
        model = MeshGraphormerDetector.from_pretrained(detect_thr=detect_thr, presence_thr=presence_thr).to(model_management.get_torch_device())
        
        depth_map_list = []
        mask_list = []
        for single_image in image:
            np_image = np.asarray(single_image.cpu() * 255., dtype=np.uint8)
            depth_map, mask, info = model(np_image, output_type="np", detect_resolution=resolution, mask_bbox_padding=mask_bbox_padding, seed=rand_seed)
            if mask_type == "based_on_depth":
                H, W = mask.shape[:2]
                mask = cv2.resize(depth_map.copy(), (W, H))
                mask[mask > 0] = 255

            elif mask_type == "tight_bboxes":
                mask = np.zeros_like(mask)
                hand_bboxes = info["abs_boxes"]
                for hand_bbox in hand_bboxes: 
                    x_min, x_max, y_min, y_max = hand_bbox
                    mask[y_min:y_max+1, x_min:x_max+1, :] = 255 #HWC

            mask = mask[:, :, :1]
            depth_map_list.append(torch.from_numpy(depth_map.astype(np.float32) / 255.0))
            mask_list.append(torch.from_numpy(mask.astype(np.float32) / 255.0))
        depth_maps, masks = torch.stack(depth_map_list, dim=0), rearrange(torch.stack(mask_list, dim=0), "n h w 1 -> n 1 h w")
        return depth_maps, expand_mask(masks, mask_expand, tapered_corners=True)

```
