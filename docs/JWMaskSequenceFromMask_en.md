
# Documentation
- Class name: JWMaskSequenceFromMask
- Category: jamesWalker55
- Output node: False

The JWMaskSequenceFromMask node converts a single input mask into a mask sequence, enabling batch processing of masks. It duplicates the input mask by a specified batch size, allowing the same mask to be applied to multiple items simultaneously, thereby simplifying workflows that require uniform mask application across multiple items.

# Input types
## Required
- mask
    - This is the input mask to be converted into a mask sequence. It serves as the base mask, which will be duplicated across the entire batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- batch_size
    - Specifies the number of times the input mask should be duplicated in the resulting mask sequence. This enables parallel processing of the same mask across multiple items.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask_sequence
    - The output is a mask sequence where each mask is a copy of the input mask. This arrangement facilitates batch processing of the same mask across multiple items.
    - Comfy dtype: MASK_SEQUENCE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
@register_node("JWMaskSequenceFromMask", "Mask Sequence From Mask")
class _:
    CATEGORY = "jamesWalker55"
    INPUT_TYPES = lambda: {
        "required": {
            "mask": ("MASK",),
            "batch_size": ("INT", {"default": 1, "min": 1, "step": 1}),
        }
    }
    RETURN_TYPES = ("MASK_SEQUENCE",)
    FUNCTION = "execute"

    def execute(
        self,
        mask: torch.Tensor,
        batch_size: int,
    ):
        assert isinstance(mask, torch.Tensor)
        assert isinstance(batch_size, int)
        assert len(mask.shape) == 2

        mask_seq = mask.reshape((1, 1, *mask.shape))
        mask_seq = mask_seq.repeat(batch_size, 1, 1, 1)

        return (mask_seq,)

```
