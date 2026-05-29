
# Documentation
- Class name: IF_ImagePrompt
- Category: ImpactFrames💥🎞️
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The IF_ImagePrompt node is a powerful tool that transforms visual inputs into text prompts. It leverages user profiles and image features to generate tailored text descriptions. It covers interpreting images, applying thematic modifiers, and integrating style or negative prompts, producing rich, context-aware text output.

# Input types
## Required
- image
    - The visual input serving as the foundation for text prompt generation. It supports multiple formats including torch.Tensor, PIL.Image, or file paths, making it suitable for different input sources.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, PIL.Image, str]
- image_prompt
    - The initial prompt related to the image, which can be empty or filled based on user input, influencing the direction of the generated text.
    - Comfy dtype: STRING
    - Python dtype: str
- base_ip
    - The IP address of the server where the AI engine resides, used for remote processing and generation.
    - Comfy dtype: STRING
    - Python dtype: str
- port
    - The server port number used to access the AI engine, ensuring proper communication and data exchange.
    - Comfy dtype: STRING
    - Python dtype: str
- engine
    - Specifies the AI engine used for generating text prompts, allowing flexible selection of the underlying technology.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- selected_model
    - Determines the specific model within the chosen engine for text generation, enabling fine-grained control over the output.
    - Comfy dtype: []
    - Python dtype: str
- profile
    - The user profile influencing the thematic direction and content of the generated text, enabling output personalization.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- embellish_prompt
    - Thematic modifiers added to the prompt, enriching the text output with specific themes or ideas.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- style_prompt
    - A style overlay for the prompt, guiding the tone or style of the generated text to match the desired aesthetic.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- neg_prompt
    - Negative prompts used to steer the generated text away from certain themes or concepts, enhancing content control.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- temperature
    - Controls the creativity of the AI response, influencing the variability and unpredictability of the generated text.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- max_tokens
    - Sets the maximum length of the generated text, ensuring the output stays within the desired constraints.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed value for the random number generator, making the output reproducible during text generation.
    - Comfy dtype: INT
    - Python dtype: int
- random
    - A flag indicating whether randomness should be introduced in text generation, increasing unpredictability.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- keep_alive
    - Determines whether the connection to the AI engine should be maintained after the request, optimizing for repeated use.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- Question
    - The initial image prompt or question derived from the input image and user profile, setting the context for the generated text.
    - Comfy dtype: STRING
    - Python dtype: str
- Response
    - The main body of the generated text, enriched with modifiers, style, and thematic content based on the input prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- Negative
    - A specific section of the generated text dedicated to handling negative prompts, ensuring certain themes or concepts are avoided.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
