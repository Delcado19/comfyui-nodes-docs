# Documentation
- Class name: EditBasicPipe
- Category: ImpactPack/Pipe
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the EditBasicPipe class aims to modify the components of the basic pipeline. It allows selectively replacing elements such as the model, clip, VAE, and conditional inputs with new values if provided. The flexibility of this method ensures that the pipeline can be adjusted according to specific needs without changing the underlying structure.

# Input types
## Required
- basic_pipe
    - The 'basic_pipe' parameter is a tuple containing the core elements of the pipeline. It is crucial because it forms the basis for modification. This method uses this input to preserve the existing structure or integrate new components as specified.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, ...]
## Optional
- model
    - The 'model' parameter is an optional input that allows the user to specify a new model for the pipeline. If provided, it replaces the existing model in the pipeline, enabling customization to suit different analysis or prediction tasks.
    - Comfy dtype: MODEL
    - Python dtype: Optional[Any]
- clip
    - The 'clip' parameter is another optional element that can be updated. It is particularly useful when the pipeline requires a different clipping mechanism or integration with various data processing techniques.
    - Comfy dtype: CLIP
    - Python dtype: Optional[Any]
- vae
    - The 'vae' parameter allows including or updating a variational autoencoder in the pipeline. This can be important for tasks involving dimensionality reduction or generative models.
    - Comfy dtype: VAE
    - Python dtype: Optional[Any]
- positive
    - The 'positive' parameter represents a conditional input that can be replaced if necessary. It plays an important role in the pipeline when tasks involve reinforcement learning or require specific guidance on model behavior.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[Any]
- negative
    - The 'negative' parameter is used to specify a negative conditional input for the pipeline. This is important when the model needs to learn from examples of what not to do, which is essential for certain types of contrastive learning.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[Any]

# Output types
- basic_pipe
    - The output 'basic_pipe' is a modified version of the input pipeline, reflecting any updates made to its components. It is important because it represents the pipeline with the new configuration, ready for further use or deployment.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, ...]

# Usage tips
- Infra type: CPU

# Source code
```
class EditBasicPipe:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'basic_pipe': ('BASIC_PIPE',)}, 'optional': {'model': ('MODEL',), 'clip': ('CLIP',), 'vae': ('VAE',), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',)}}
    RETURN_TYPES = ('BASIC_PIPE',)
    RETURN_NAMES = ('basic_pipe',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Pipe'

    def doit(self, basic_pipe, model=None, clip=None, vae=None, positive=None, negative=None):
        (res_model, res_clip, res_vae, res_positive, res_negative) = basic_pipe
        if model is not None:
            res_model = model
        if clip is not None:
            res_clip = clip
        if vae is not None:
            res_vae = vae
        if positive is not None:
            res_positive = positive
        if negative is not None:
            res_negative = negative
        pipe = (res_model, res_clip, res_vae, res_positive, res_negative)
        return (pipe,)
```