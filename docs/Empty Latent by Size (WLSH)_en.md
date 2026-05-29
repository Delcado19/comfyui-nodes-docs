# Documentation
- Class name: WLSH_Empty_Latent_Image_By_Resolution
- Category: WLSH Nodes/latent
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The 'generate' method of the WLSH_Empty_Latent_Image_By_Resolution node creates an empty latent image space for a given resolution. It abstracts the complexity of generating the latent space through a simple interface that takes width, height, and batch size as input and outputs a latent tensor along with adjusted dimensions.

# Input types
## Required
- width
- The `width` parameter specifies the width of the latent image in pixels. It is crucial for determining the resolution of the generated latent space, directly affecting the final image's quality and detail.
    - Comfy dtype: INT
    - Python dtype: int
- height
- The `height` parameter determines the height of the latent image in pixels. Like width, it is essential for establishing resolution and the fidelity of the generated latent image.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- batch_size
- The `batch_size` parameter is optional and decides how many latent images are generated in a single operation. It can be used to process multiple images efficiently at once, increasing the node's throughput.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
- The `latent` output is a tensor representing the generated latent image space. It is a key component for subsequent image processing and generation tasks, providing the necessary base data.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- width
- The `width` output reflects the adjusted width of the latent image after generation. It is important for understanding the actual size of the generated latent space.
    - Comfy dtype: INT
    - Python dtype: int
- height
- The `height` output provides the adjusted height of the latent image. Like width, it is critical for knowing the exact dimensions of the generated latent space.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Empty_Latent_Image_By_Resolution:

    def __init__(self, device='cpu'):
        self.device = device

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'width': ('INT', {'default': 512, 'min': 16, 'max': MAX_RESOLUTION, 'step': 8}), 'height': ('INT', {'default': 512, 'min': 16, 'max': MAX_RESOLUTION, 'step': 8}), 'batch_size': ('INT', {'default': 1, 'min': 1, 'max': 4096})}}
    RETURN_TYPES = ('LATENT', 'INT', 'INT')
    RETURN_NAMES = ('latent', 'width', 'height')
    FUNCTION = 'generate'
    CATEGORY = 'WLSH Nodes/latent'

    def generate(self, width, height, batch_size=1):
        adj_width = width // 8
        adj_height = height // 8
        latent = torch.zeros([batch_size, 4, adj_height, adj_width])
        return ({'samples': latent}, adj_width * 8, adj_height * 8)
```