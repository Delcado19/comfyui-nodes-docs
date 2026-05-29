
# Documentation
- Class name: RAFTFlowToImage
- Category: jamesWalker55
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The RAFTFlowToImage node's main function is to convert optical flow data into images. This process involves transforming flow data representing motion between two frames into a visual format for interpretation or further processing. This node plays an important role in the field of computer vision, especially in motion analysis and video processing tasks. By converting complex optical flow data into intuitive image representations, the RAFTFlowToImage node helps researchers and developers better understand and analyze motion patterns in video sequences.

# Input types
## Required
- raft_flow
    - The raft_flow input is a tensor representing optical flow data. This data is essential for generating corresponding image representations capturing motion between two frames. The optical flow data contains pixel-level motion information, which the RAFTFlowToImage node uses to create visualization results.
    - Comfy dtype: RAFT_FLOW
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is an image representation of the optical flow data. This image visually displays the motion between two frames in a format that is easy to interpret and further process. Through color coding and intensity variations, the image effectively conveys the direction and magnitude of motion, providing valuable visual information for subsequent analysis and applications.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
@register_node("RAFTEstimate", "RAFT Estimate")
class _:
    """
    https://pytorch.org/vision/main/auto_examples/plot_optical_flow.html
    """

    CATEGORY = "jamesWalker55"
    INPUT_TYPES = lambda: {
        "required": {
            "image_a": ("IMAGE",),
            "image_b": ("IMAGE",),
        }
    }
    RETURN_TYPES = ("RAFT_FLOW",)
    FUNCTION = "execute"

    def execute(self, image_a: torch.Tensor, image_b: torch.Tensor):
        """
        Code derived from:
        https://pytorch.org/vision/main/auto_examples/plot_optical_flow.html
        """

        assert isinstance(image_a, torch.Tensor)
        assert isinstance(image_b, torch.Tensor)

        torch_device = model_management.get_torch_device()
        offload_device = model_management.unet_offload_device()

        image_a = comfyui_to_native_torch(image_a).to(torch_device)
        image_b = comfyui_to_native_torch(image_b).to(torch_device)
        model = load_model().to(torch_device)

        image_a = preprocess_image(image_a)
        image_b = preprocess_image(image_b)

        all_flows = model(image_a, image_b)
        best_flow = all_flows[-1]
        # best_flow.shape => torch.Size([1, 2, 512, 512])

        model.to(offload_device)
        image_a = image_a.to("cpu")
        image_b = image_b.to("cpu")
        best_flow = best_flow.to("cpu")

        return (best_flow,)

```
