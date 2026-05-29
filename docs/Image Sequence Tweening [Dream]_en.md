
# Documentation
- Class name: Image Sequence Tweening [Dream]
- Category: ✨ Dream/🎥 animation/⚙ postprocessing
- Output node: False

This node enhances animation sequences by inserting additional frames between existing frames, effectively increasing animation smoothness and fluidity. It uses a multiplier to determine how many frames to add between each original frame, allowing customization of the interpolation degree.

# Input types
## Required
- sequence
    - The animation sequence to process. This is the primary input defining the frames that need interpolation.
    - Comfy dtype: ANIMATION_SEQUENCE
    - Python dtype: AnimationSequence
- multiplier
    - Determines the number of interpolated frames to add between each original frame in the sequence, allowing control over the final animation's smoothness.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- sequence
    - The enhanced animation sequence, with additional interpolated frames inserted between original frames.
    - Comfy dtype: ANIMATION_SEQUENCE
    - Python dtype: AnimationSequence


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamSequenceTweening:
    NODE_NAME = "Image Sequence Tweening"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.sequence | {
                "multiplier": ("INT", {"default": 2, "min": 2, "max": 10}),
            },
        }

    CATEGORY = NodeCategories.ANIMATION_POSTPROCESSING
    RETURN_TYPES = (AnimationSequence.ID,)
    RETURN_NAMES = ("sequence",)
    OUTPUT_NODE = False
    FUNCTION = "process"

    @classmethod
    def IS_CHANGED(cls, sequence: AnimationSequence, **kwargs):
        return sequence.is_defined

    def process(self, sequence: AnimationSequence, multiplier):
        if not sequence.is_defined:
            return (sequence,)

        def _generate_extra_frames(input_index, last_index, images):
            results = {}
            if input_index == last_index:
                # special case
                for i in range(multiplier):
                    results[input_index * multiplier + i] = images[0]
                return results

            # normal case
            current_frame = images[0]
            next_frame = images[1]
            for i in range(multiplier):
                alpha = float(i + 1) / multiplier
                results[multiplier * input_index + i] = current_frame.blend(next_frame, 1.0 - alpha, alpha)
            return results

        proc = AnimationSeqProcessor(sequence)
        return (proc.process([0, 1], _generate_extra_frames),)

```
