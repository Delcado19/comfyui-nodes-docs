
# Documentation
- Class name: JWMaskSequenceJoin
- Category: jamesWalker55
- Output node: False

This node merges two mask sequences into a single concatenated mask sequence. It operates by concatenating the input mask sequences along a specified dimension, effectively combining them into a unified sequence for further processing or analysis.

# Input types
## Required
- mask_sequence_i
- This parameter is the input mask sequence, which will be merged with another mask sequence. It is the primary object of the node operation and directly influences the content and structure of the output.
    - Comfy dtype: MASK_SEQUENCE
    - Python dtype: unknown

# Output types
- mask_sequence
- The output mask_sequence is the result of concatenating the two input mask sequences. This unified sequence can be used in subsequent mask operations that require combined views.
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
