
# Documentation
- Class name: IF_PromptMkr
- Category: ImpactFrames💥🎞️
- Output node: False
- Repo Ref: https://github.com/ImACodeLearner/ComfyUI-IMPACT-PACK

The IF_PromptMkr node is designed to transform input prompts into more detailed or stylized prompts using various AI engines and custom options. It enriches the original prompt by adding modifiers, styles, or negations based on user-defined parameters, aiming to generate more impactful and context-rich prompts for creative or analytical applications.

# Input types
## Required
- input_prompt
    - The initial prompt provided by the user, serving as the basis for further modification or refinement. It is crucial for defining the thematic direction of the generated output.
    - Comfy dtype: STRING
    - Python dtype: str
- base_ip
    - Specifies the base IP address of the AI engine API, determining where the prompt transformation request is sent.
    - Comfy dtype: STRING
    - Python dtype: str
- port
    - The port number used with the base IP to access the AI engine's API.
    - Comfy dtype: STRING
    - Python dtype: str
- engine
    - Selects the AI engine used to process the input prompt (e.g., ollama, openai, anthropic), influencing the style and functionality of the generated output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- selected_model
    - The specific model used for generating the output, depending on the selected engine and available models.
    - Comfy dtype: []
    - Python dtype: tuple
- profile
    - A predefined set of parameters or "profiles" that influence the generation process, such as tone or complexity.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- embellish_prompt
    - Optional parameter for adding additional descriptive elements to the input prompt, enhancing its detail or thematic depth.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- style_prompt
    - Optional parameter for applying a specific style or tone to the input prompt, altering its presentation or narrative voice.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- neg_prompt
    - Optional parameter for introducing negations or constraints into the input prompt, guiding the generation away from certain topics or concepts.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- temperature
    - Controls the creativity or randomness of the generated output, with higher values allowing for more diverse responses.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- max_tokens
    - The maximum number of tokens (words or characters) the generated output can contain, setting its length limit.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed value for the random number generator, ensuring reproducibility of the generated output when set.
    - Comfy dtype: INT
    - Python dtype: int
- random
    - Boolean parameter; when true, uses a random seed for generation; otherwise, uses a fixed temperature setting.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- keep_alive
    - Determines whether the AI model remains loaded after generation, affecting response time and resource usage.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- Question
    - Comfy dtype: STRING
    - The original input prompt, returned unchanged as part of the output.
    - Python dtype: str
- Response
    - Comfy dtype: STRING
    - The enriched or stylized prompt generated based on the input prompt and custom options.
    - Python dtype: str
- Negative
    - Comfy dtype: STRING
    - The prompt with negations or constraints generated based on the neg_prompt parameter.
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/ImACodeLearner/ComfyUI-IMPACT-PACK)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
