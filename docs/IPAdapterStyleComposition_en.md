# Documentation
- Class name: IPAdapterStyleComposition
- Category: ipadapter/style_composition
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterStyleComposition node aims to seamlessly blend image styles and compositions, providing a powerful framework for creative image processing. It skillfully merges stylistic elements with compositional structures, enhancing the visual impact and coherence of the final output.

# Input types
## Required
- model
    - The model parameter is critical to the node's operation, as it determines the underlying architecture used for style and compositional adaptation. It forms the foundation of the node's functional construction, enabling transformation of input images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter parameter is essential to the node, as it provides the necessary adapter mechanisms for style composition integration with the model. It plays a key role in the node's processing and adaptation of styles within the compositional framework.
    - Comfy dtype: IPADAPTER
    - Python dtype: torch.Tensor
- image_style
    - The image_style parameter is vital to the node's purpose, as it represents the stylistic input that will be artistically combined with other elements. It is the primary visual style source the node aims to incorporate into the final image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray
- image_composition
    - The image_composition parameter is essential for defining the structural layout into which stylistic elements will be integrated. It sets the stage for the node's compositional process, ensuring the final image reflects a harmonious fusion of style and structure.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray
## Optional
- weight_style
    - The weight_style parameter allows fine-tuning of stylistic influence in the composition. It is a key factor in controlling the balance between style and composition, ensuring the final output aligns with the desired aesthetic.
    - Comfy dtype: FLOAT
    - Python dtype: float
- combine_embeds
    - The combine_embeds parameter determines the method for combining embeddings used to integrate stylistic features. It is critical to the node's ability to effectively merge different stylistic inputs, influencing the stylistic consistency of the final image.
    - Comfy dtype: COMBO[concat, add, subtract, average, norm average]
    - Python dtype: str
- start_at
    - The start_at parameter defines the starting point of the compositional process, allowing control over the initial phase of style integration. It is an important factor in how the node manages the progression of style application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter specifies the endpoint of the compositional process, allowing control over the final phase of style integration. It is essential for the node to determine the extent of stylistic influence within the composition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- embeds_scaling
    - The embeds_scaling parameter adjusts the scaling of embeddings used in the composition, which is critical for maintaining the integrity and quality of stylistic features throughout the process.
    - Comfy dtype: COMBO[V only, K+V, K+V w/ C penalty, K+mean(V) w/ C penalty]
    - Python dtype: str

# Output types
- composed_image
    - The composed_image output represents the final result of the style composition process, where stylistic elements have been harmoniously integrated into the compositional structure. It is a testament to the node's ability to produce visually pleasing and coherent images.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
