
# Documentation
- Class name: LatentDuplicator
- Category: latent
- Output node: False

The LatentDuplicator node is designed to duplicate a latent image a specified number of times, generating multiple copies of the same image for further processing or analysis.

# Input types
## Required
- latent_image
    - The input latent image to be duplicated. It serves as the base image, from which multiple copies will be generated according to the specified duplication count.
    - Comfy dtype: LATENT
    - Python dtype: clabc.Mapping[str, torch.Tensor]
- dup_times
    - Specifies the number of times the input latent image should be duplicated. This count determines how many copies of the base image will be generated.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
    - Outputs the duplicated latent images, which are concatenated into a single tensor, effectively increasing the number of images available for subsequent operations.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LatentDuplicator:
    """
    Duplicate each latent images and pipe through
    """

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        """
        Input: copies you want to get
        """
        return {
            "required": {
                "latent_image": ("LATENT", ),
                "dup_times": ("INT", {
                    "default": 2,
                    "min": 1,
                    "max": 16,
                    "step": 1,
                }),
            },
        }

    RETURN_TYPES = ("LATENT", )
    # RETURN_NAMES = ("image_output_name",)

    FUNCTION = "run"

    OUTPUT_NODE = False

    CATEGORY = "latent"

    def run(self, latent_image: clabc.Mapping[str, torch.Tensor],
            dup_times: int):
        """
        对latent_image进行复制, 复制次数为dup_times。
        
        Args:
            latent_image (clabc.Mapping[str, torch.Tensor]): 输入的latent_image, 包含'samples'键。
            dup_times (int): 复制次数。
        
        Returns:
            Tuple[Dict[str, torch.Tensor]]: 返回包含samples的字典, samples是一个长度为(dup_times+1)的样本张量。
        
        """
        samples = latent_image['samples']

        sample_list = [samples] + [
            torch.clone(samples) for _ in range(dup_times - 1)
        ]

        print(
            f"LatentDuplicator: dup {dup_times} times,",
            f"return {len(sample_list)} images",
        )
        return ({
            'samples': torch.cat(sample_list),
        }, )

```
