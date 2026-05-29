
# Documentation
- Class name: Inference_Core_MeshGraphormer-DepthMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node preprocesses images for depth map generation and hand pose estimation using the MeshGraphormer model. It converts input images to model-compatible format, performs inference to generate depth maps and masks, and processes these outputs for further use in hand refinement tasks.

# Input types
## Required
- image
    - Input image or batch of images to be processed for depth map and mask generation. It plays a critical role during node execution, directly affecting the quality and accuracy of the generated depth maps and masks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- mask_bbox_padding
    - Determines the amount of padding around detected bounding boxes, affecting the size and coverage of the generated masks.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - Specifies the resolution for depth map and mask detection, affecting the level of detail in the output.
    - Comfy dtype: INT
    - Python dtype: int
- mask_type
    - Defines the mask generation strategy, which can be based on depth values or compact bounding boxes, affecting the shape and coverage of the masks.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- mask_expand
    - Controls the expansion of masks beyond their original boundaries, helping ensure complete coverage of hand regions in the depth map.
    - Comfy dtype: INT
    - Python dtype: int
- rand_seed
    - Seed value for random number generation, ensuring reproducibility of the mask generation process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - Processed images after depth map and mask generation, available for further analysis or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- INPAINTING_MASK
    - Mask indicating areas requiring inpainting or further processing, typically highlighting regions of interest such as hands.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


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
                "rand_seed": ("INT", {"default": 88, "min": 0, "max": 0xffffffffffffffff})
            }
        )
        return types

    RETURN_TYPES = ("IMAGE", "MASK")
    RETURN_NAMES = ("IMAGE", "INPAINTING_MASK")
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Normal and Depth Estimators"

    def execute(self, image, mask_bbox_padding=30, mask_type="based_on_depth", mask_expand=5, resolution=512, rand_seed=88, **kwargs):
        install_deps()
        from controlnet_aux.mesh_graphormer import MeshGraphormerDetector
        model = MeshGraphormerDetector.from_pretrained().to(model_management.get_torch_device())
        
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
