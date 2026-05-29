
# Documentation
- Class name: ReActorFaceSwapOpt
- Category: 🌌 ReActor
- Output node: False

ReActorFaceSwapOpt node provides optimized face swapping functionality within the ReActor framework, offering users advanced options to fine-tune the face swap process. It extends the basic face swap capabilities by introducing additional parameters and optimizations, thereby improving the quality and flexibility of the output.

# Input types
## Required
- enabled
    - Determines whether to enable the face swap operation, allowing users to toggle this function as needed.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- input_image
    - Primary image input for the face swap operation, serving as the target for facial replacement.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- swap_model
    - Specifies the model used for face swapping, allowing selection from a list of predefined available models.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- facedetection
    - Defines the face detection algorithm to use, providing multiple options to best suit different image conditions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- face_restore_model
    - Selects the model used to restore facial details after face swapping, improving the overall quality after the swap.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- face_restore_visibility
    - Adjusts the visibility of restored facial details, providing control over the blending between original and restored facial features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- codeformer_weight
    - Controls the influence of the CodeFormer model in the face restoration process, balancing detail enhancement and naturalness.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- source_image
    - Optional secondary image input for face swapping, serving as the face source to be swapped into the main image.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- face_model
    - Optionally specifies the face model used for face swapping, providing further customization of the face swap process.
    - Comfy dtype: FACE_MODEL
    - Python dtype: FACE_MODEL
- options
    - Provides additional configuration options for the face swap operation, allowing for more detailed customization.
    - Comfy dtype: OPTIONS
    - Python dtype: OPTIONS

# Output types
- image
    - Output image after the face swap operation, containing the face swap result integrated into the original image.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- face_model
    - Outputs the face model used during the face swap process, which can be used for further operations or analysis.
    - Comfy dtype: FACE_MODEL
    - Python dtype: FACE_MODEL


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
