
# Documentation
- Class name: Image Sequence Blend [Dream]
- Category: ✨ Dream/🎥 animation/⚙ postprocessing
- Output node: False
- Repo Ref: https://github.com/ComfyUI-extensions/ComfyUI_DreamExamples

This node blends animation sequences by applying fade-in and fade-out effects over a specified number of iterations, enhancing visual transitions and continuity within the sequence.

# Input types
## Required
- sequence
    - The animation sequence to be blended, serving as the primary input for the blending process.
    - Comfy dtype: ANIMATION_SEQUENCE
    - Python dtype: AnimationSequence
- fade_in
    - Specifies the intensity of the fade-in effect at the start of each frame transition, affecting the smoothness of the sequence's visual flow.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fade_out
    - Determines the intensity of the fade-out effect at the end of each frame transition, contributing to seamless integration between consecutive frames.
    - Comfy dtype: FLOAT
    - Python dtype: float
- iterations
    - Controls the number of times the blending process is applied, influencing the overall smoothness and continuity of the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- sequence
    - The resulting animation sequence after blending processing, featuring enhanced visual transitions between frames.
    - Comfy dtype: ANIMATION_SEQUENCE
    - Python dtype: AnimationSequence


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamSequenceBlend:
    NODE_NAME = "Image Sequence Blend"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": SharedTypes.sequence | {
                "fade_in": ("FLOAT", {"default": 0.1, "min": 0.01, "max": 0.5}),
                "fade_out": ("FLOAT", {"default": 0.1, "min": 0.01, "max": 0.5}),
                "iterations": ("INT", {"default": 1, "min": 1, "max": 10}),
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

    def process(self, sequence: AnimationSequence, fade_in, fade_out, iterations):
        if not sequence.is_defined:
            return (sequence,)

        current_sequence = sequence
        for i in range(iterations):
            proc = AnimationSeqProcessor(current_sequence)

            def _blur(index: int, last_index: int, images: List[DreamImage]):
                pre_frame = images[0].blend(images[1], fade_in, 1.0)
                post_frame = images[2].blend(images[1], fade_out, 1.0)
                return {index: pre_frame.blend(post_frame)}

            current_sequence = proc.process([-1, 0, 1], _blur)

        return (current_sequence,)

```
