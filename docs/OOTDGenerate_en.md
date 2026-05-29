# Documentation
- Class name: OOTDGenerate
- Category: OOTD
- Output node: False
- Repo Ref: https://github.com/AuroBit/ComfyUI-OOTDiffusion.git

This node synthesizes clothing based on input images and categories, using a diffusion model for creative fashion generation. It provides users with diverse, context‑relevant, stylistically consistent clothing options.

# Input types
## Required
- pipe
- The pipe parameter is critical; it encapsulates the diffusion model used to generate clothing. It forms the core of the node’s functionality and determines the quality and type of the generated garments.
    - Comfy dtype: MODEL
    - Python dtype: OOTDiffusion
- cloth_image
- The cloth_image parameter serves as the foundation for generating clothing. It is essential for the node to understand context and synthesize garments visually consistent with the provided image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model_image
- The model_image parameter supplies a template of the person for the generated clothing. It is vital for maintaining structural integrity and realistic proportions with the human form.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- seed
- The seed parameter introduces randomness into the generation process, allowing multiple outcomes. It is crucial for users seeking unique, non‑repeating fashion options.
    - Comfy dtype: INT
    - Python dtype: int
- steps
- The steps parameter sets the number of iterations used in the diffusion process. It affects the detail and fineness of the final garment; more steps yield finer results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
- The cfg parameter adjusts the image scaling used during generation, influencing the resolution and clarity of the clothing. It is a key factor for achieving high‑quality visual output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- category
- The category parameter specifies the type of clothing to generate, guiding the node to produce garments that match the selected fashion category. It ensures relevance and appropriateness of the output.
    - Comfy dtype: LIST
    - Python dtype: List[str]

# Output types
- image
- The image output displays the final generated clothing, showcasing a creative synthesis of fashion elements based on the input. It is the primary result of the node operation, representing the realized clothing concept.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_masked
- The image_masked output provides a version of the generated clothing with a specific fashion‑element mask applied. This output is important for users who need detailed control over the generated content, enabling further customization and manipulation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/AuroBit/ComfyUI-OOTDiffusion)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
