
# Documentation
- Class name: RAFTEstimate
- Category: jamesWalker55
- Output node: False

The RAFTEstimate node is designed to estimate the optical flow between two images using the RAFT algorithm. It abstracts the complexity of optical flow computation, providing a simple and direct method to obtain motion vectors that describe the apparent motion of objects between consecutive images.

# Input types
## Required
- image_a
    - The first image in the sequence used for computing optical flow. It serves as the reference frame against which motion is measured.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_b
    - The second image in the sequence, immediately following 'image_a'. It is compared with the first image to estimate motion vectors.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- raft_flow
    - The estimated optical flow represented as a tensor. It encapsulates the motion vectors between the two input images.
    - Comfy dtype: RAFT_FLOW
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
