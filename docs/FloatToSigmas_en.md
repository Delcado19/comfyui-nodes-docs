
# Documentation
- Class name: FloatToSigmas
- Category: KJNodes/noise
- Output node: False

The FloatToSigmas node converts a series of floating-point values into sigma tensors, facilitating the conversion of numerical data into a format suitable for noise generation and manipulation in neural networks.

# Input types
## Required
- float_list
    - A list of floating-point values to be converted to sigma tensors. This input is crucial for defining the specific noise levels applied in neural network processing.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]

# Output types
- SIGMAS
    - The sigma tensor derived from the input list of floating-point values, used for noise generation and manipulation in neural network operations.
    - Comfy dtype: SIGMAS
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class FloatToSigmas:
    @classmethod
    def INPUT_TYPES(s):
        return {"required":
                    {
                     "float_list": ("FLOAT", {"default": 0.0, "forceInput": True}),
                     }
                }
    RETURN_TYPES = ("SIGMAS",)
    RETURN_NAMES = ("SIGMAS",)
    CATEGORY = "KJNodes/noise"
    FUNCTION = "customsigmas"
    DESCRIPTION = """
Creates a sigmas tensor from list of float values.  

"""
    def customsigmas(self, float_list):
        return torch.tensor(float_list, dtype=torch.float32),

```
