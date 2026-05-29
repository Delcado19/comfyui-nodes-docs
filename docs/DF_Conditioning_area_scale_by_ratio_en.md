
# Documentation
- Class name: DF_Conditioning_area_scale_by_ratio
- Category: Derfuu_Nodes/Modded nodes/Conditions
- Output node: False

This node aims to resize the conditioning region according to a specified ratio, while modifying the conditioning dimensions and strength to achieve the desired effect. It allows dynamic adjustment of the conditioning region size, suitable for applications requiring precise control over how conditioning affects generated content.

# Input types
## Required
- conditioning
    - conditioning input represents the current state of the conditioning region to be scaled. It is crucial for determining the base dimensions and strength that will be modified.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, Union[int, float, Tuple[int, int, int, int]]]]]
- modifier
    - modifier is a scaling factor that directly affects the size of the conditioning region, allowing proportional adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_modifier
    - This parameter adjusts the conditioning strength, enabling fine-tuning of its impact on the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- conditioning
    - Returns the conditioning after region size and strength adjustments, reflecting the applied scaling modifications.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, Union[int, float, Tuple[int, int, int, int]]]]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ConditioningAreaScale_Ratio:
    def __init__(self):
        pass


    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "conditioning": Field.conditioning(),
                "modifier": Field.float(),
                "strength_modifier": Field.float(),
            }
        }

    RETURN_TYPES = ("CONDITIONING",)
    FUNCTION = "resize"
    CATEGORY = TREE_COND

    def resize(self, conditioning, modifier, strength_modifier, min_sigma=0.0, max_sigma=99.0):
        c = []

        for t in conditioning:
            n = [t[0], t[1].copy()]

            try:
                size, offset = get_conditioning_size(n[1])
            except:
                c.append(n)
                continue

            height = int(size["height"] * 8 * modifier)
            width = int(size["width"] * 8 * modifier)

            y = int(offset["y_offset"] * 8 * modifier)
            x = int(offset["x_offset"] * 8 * modifier)

            n[1]['area'] = (height // 8, width // 8, y // 8, x // 8)
            n[1]['strength'] *= strength_modifier
            n[1]['min_sigma'] = min_sigma
            n[1]['max_sigma'] = max_sigma
            c.append(n)

        return (c,)

```
