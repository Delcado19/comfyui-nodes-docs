
# Documentation
- Class name: RAFTLoadFlowFromEXRChannels
- Category: jamesWalker55
- Output node: False

This node is specifically used to load motion flow from EXR image files, especially suitable for vector channels in Blender's Cycles renderer. It extracts motion vectors by reading specified channels in the EXR file, allowing manipulation and use of these vectors in subsequent processing or visualization tasks.

# Input types
## Required
- path
    - Specify the EXR image file path from which to load the motion flow. This path is critical as it points to the source image required for processing.
    - Comfy dtype: STRING
    - Python dtype: str
- x_channel
    - Determine the EXR image channel (R, G, B, A) used for the x component of the motion flow. The choice of channel affects how motion in the x-axis direction is interpreted.
    - Comfy dtype: ['R', 'G', 'B', 'A']
    - Python dtype: str
- y_channel
    - Determine the EXR image channel (R, G, B, A) used for the y component of the motion flow. The choice of channel affects how motion in the y-axis direction is interpreted.
    - Comfy dtype: ['R', 'G', 'B', 'A']
    - Python dtype: str
- invert_x
    - Boolean flag indicating whether to invert the motion flow along the x-axis. Can be used to adjust motion direction if necessary.
    - Comfy dtype: ['false', 'true']
    - Python dtype: bool
- invert_y
    - Boolean flag indicating whether to invert the motion flow along the y-axis. Can be used to adjust motion direction if necessary.
    - Comfy dtype: ['false', 'true']
    - Python dtype: bool

# Output types
- raft_flow
    - The output is a tensor representing the motion flow extracted from the specified EXR channels. This flow can be used for further motion analysis or visualization.
    - Comfy dtype: RAFT_FLOW
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
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
