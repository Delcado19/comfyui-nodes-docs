# Documentation
- Class name: IPAdapterStyleCompositionBatch
- Category: Style Composition
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterStyleCompositionBatch node is designed to facilitate the combination of image styles and image compositions in a batch processing manner. It integrates style adaptation techniques to seamlessly blend different visual elements, emphasizing the importance of style consistency in generated images.

# Input types
## Required
- model
    - The model parameter is critical to the node's operation, as it defines the underlying neural network architecture used for style composition. It directly affects the node's ability to generate images with the desired style characteristics.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter parameter is essential for adapting input images to the model's style. It plays a key role in ensuring that input images align with the model's style expectations for effective style composition.
    - Comfy dtype: IPADAPTER
    - Python dtype: torch.Tensor
- image_style
    - The image_style parameter is a key input that provides the style reference for the composition process. It determines the visual style that the output image should embody, influencing the overall aesthetic result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_composition
    - The image_composition parameter is the compositional foundation of the node's operation. It is the image that will be stylized and transformed according to the style provided by image_style, forming the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- weight_style
    - The weight_style parameter allows fine-tuning the influence of the style input on the final composition. It is particularly useful when a balance between the original composition and the applied style is desired.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_composition
    - The weight_composition parameter adjusts the contribution of compositional elements to the final output. It is important for achieving a harmonious fusion of style and composition in the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- expand_style
    - The expand_style parameter determines whether the style should be expanded to fit the composition. This can be important for ensuring the style is applied uniformly across the entire image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- start_at
    - The start_at parameter specifies the starting point of the composition process. It is used to control the initial phase of style application, influencing the progression of the composition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter marks the endpoint of the composition process. It determines the final phase of style application, influencing the extent to which the style is applied across the composition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- embeds_scaling
    - The embeds_scaling parameter is used to select the scaling method for the embeddings involved in style composition. It is a critical factor in determining the quality and characteristics of the composed image.
    - Comfy dtype: COMBO['V only', 'K+V', 'K+V w/ C penalty', 'K+mean(V) w/ C penalty']
    - Python dtype: str

# Output types
- composed_images
    - The composed_images output represents the final result of the style composition process. It contains the synthesized images that have been stylized and composed according to the input parameters, demonstrating the node's capabilities.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
