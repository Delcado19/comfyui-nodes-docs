
# Documentation
- Class name: FloatToMask
- Category: KJNodes
- Output node: False

The FloatToMask node is specifically designed to generate masks based on input float values. Each input value determines the strength or transparency of the mask. This node is designed to create batches of masks with specified dimensions, making it ideal for applications that require dynamic mask generation based on different intensity levels.

# Input types
## Required
- input_values
    - Represents the float values used to generate the mask. Each value in the list determines the strength of the corresponding mask in the batch, affecting its transparency or color depth.
    - Comfy dtype: FLOAT
    - Python dtype: List[float] or float
- width
    - Specifies the width of the generated mask. This dimension determines the width of each mask in the batch, directly affecting the size and shape of the mask.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the height of the generated mask. This dimension determines the height of each mask in the batch, affecting the overall size and shape of the mask.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The output consists of a batch of masks generated based on the input float values, each mask having the specified width and height dimensions. These masks can be used in various applications that require custom mask generation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FloatToMask:

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "input_values": ("FLOAT", {"forceInput": True, "default": 0}),
                "width": ("INT", {"default": 100, "min": 1}),
                "height": ("INT", {"default": 100, "min": 1}),
            },
        }
    RETURN_TYPES = ("MASK",)
    FUNCTION = "execute"
    CATEGORY = "KJNodes"
    DESCRIPTION = """
Generates a batch of masks based on the input float values.
The batch size is determined by the length of the input float values.
Each mask is generated with the specified width and height.
"""

    def execute(self, input_values, width, height):
        import pandas as pd
        # Ensure input_values is a list
        if isinstance(input_values, (float, int)):
            input_values = [input_values]
        elif isinstance(input_values, pd.Series):
            input_values = input_values.tolist()
        elif isinstance(input_values, list) and all(isinstance(item, list) for item in input_values):
            input_values = [item for sublist in input_values for item in sublist]

        # Generate a batch of masks based on the input_values
        masks = []
        for value in input_values:
            # Assuming value is a float between 0 and 1 representing the mask's intensity
            mask = torch.ones((height, width), dtype=torch.float32) * value
            masks.append(mask)
        masks_out = torch.stack(masks, dim=0)
    
        return(masks_out,)

```
