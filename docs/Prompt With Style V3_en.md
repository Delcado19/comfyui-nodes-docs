# Documentation
- Class name: PromptWithStyleV3
- Category: Mikey
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The PromptWithStyleV3 node is designed to generate image samples based on a combination of positive and negative prompts along with optional style specifications. It manages the complexity of integrating style and conditioning into the image generation process, providing a seamless way to influence output according to desired characteristics. The node abstracts the complexity of applying style and conditional sampling, offering users a simple interface for stylized image synthesis.

# Input types
## Required
- positive_prompt
    - The positive prompt is a descriptive text that guides image generation toward desired characteristics. It plays a crucial role in steering the creative process toward producing images aligned with the user's vision. The node relies on the positive prompt to determine which aspects should be emphasized in the generated image.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative prompt serves as the counterpart to the positive prompt, guiding image generation to avoid unwanted features or elements. It is an important parameter for fine-tuning the output and ensuring that generated images exclude certain characteristics the user wishes to avoid.
    - Comfy dtype: STRING
    - Python dtype: str
- ratio_selected
    - The selected ratio parameter determines the aspect ratio of the generated image. It is a key factor in setting the output dimensions, allowing users to choose from a range of predefined ratios or specify a custom ratio to control the shape of the generated image.
    - Comfy dtype: COMBO[INT]
    - Python dtype: List[int]
## Optional
- custom_size
    - The custom size input allows users to specify non-standard dimensions for the generated image. When enabled, users can enter custom width and height, giving them full control over the output image dimensions, which is useful for specific display requirements or design constraints.
    - Comfy dtype: STRING
    - Python dtype: str
- fit_custom_size
    - The adapt custom size parameter works with the custom size input to determine how the generated image should fit the specified dimensions. It decides whether the image should be scaled to fit or cropped to match the exact dimensions provided by the user.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_width
    - When custom image dimensions are enabled, the custom width parameter sets the width of the generated image. It works in conjunction with the custom height parameter to define the exact output dimensions, allowing precise control over the image width.
    - Comfy dtype: INT
    - Python dtype: int
- custom_height
    - The custom height parameter is used alongside the custom width to determine the vertical dimension of the generated image. It is particularly useful when the output requires specific height requirements, enabling users to precisely control the image height.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch size parameter defines the number of images generated in a single pass. It is an important factor in managing computational resources and can affect the efficiency of the image generation process. Adjusting the batch size helps balance performance and the number of images generated at once.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter is used to introduce randomness into the image generation process. It ensures that each run with the same seed produces a deterministic set of images, which is useful for obtaining consistent results or fine-tuning the generation process through experimentation.
    - Comfy dtype: INT
    - Python dtype: int
- target_mode
    - The target mode parameter specifies the scaling strategy for the generated image. It allows users to choose different scaling options, such as doubling or quadrupling the size, which may affect the level of detail and overall appearance of the output image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- base_model
    - The base model parameter refers to the underlying model used for image generation. It is a critical component that determines the quality and style of the generated images. Users can select from a range of pretrained models to achieve different artistic effects.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip_base
    - The CLIP base parameter is associated with the CLIP model used for text-to-image conversion. It plays an important role in how text prompts are interpreted and translated into visual elements. The choice of CLIP base can affect the thematic coherence and stylistic detail of the generated images.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- clip_refiner
    - The CLIP refine parameter is used to improve the quality of generated images by applying secondary processing steps. It is an optional component that can give users additional control over subtle details and stylistic elements in the output, enabling more refined and polished results.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module

# Output types
- base_model
    - The base model output provides the underlying model used for the image generation process. It is a critical component that defines the architecture and capabilities of the image synthesis task. This output can be used for further processing or analysis of the model itself.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- samples
    - The samples output contains the generated image samples, which are the primary result of the image generation process. These samples embody the visual representation of the input prompts and styles, providing tangible results that can be viewed, displayed, or further manipulated.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- base_pos_cond
    - The base positive conditioning output represents the positive conditioning vector derived from the base model. It is used to guide the image generation process to produce images that align with the positive aspects specified in the prompt.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- base_neg_cond
    - The base negative conditioning output is the negative conditioning vector that helps steer image generation away from unwanted features. It is an important part of ensuring that generated images do not contain elements inconsistent with user preferences.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- refiner_pos_cond
    - The refine positive conditioning output is the enhanced positive conditioning vector applied during secondary processing steps of image generation. It is used to further refine images, ensuring they closely match the desired positive attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- refiner_neg_cond
    - The refine negative conditioning output is the enhanced negative conditioning vector used to fine-tune the image generation process and exclude more complex unwanted features. It helps achieve a higher level of detail and precision in the final output images.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- positive_prompt
    - The positive prompt output reflects the processed positive prompt text used in image generation. It is the textual input that guides the model to create images with desired characteristics, and can be used for reference or further analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative prompt output is the processed negative prompt text that helps shape image generation by avoiding certain features. It is a key component for ensuring that generated images adhere to user constraints and do not contain unwanted elements.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
