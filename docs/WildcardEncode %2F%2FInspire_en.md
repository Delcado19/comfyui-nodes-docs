# Documentation
- Class name: WildcardEncodeInspire
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The WildcardEncodeInspire node processes and encodes text input containing wildcard and LoRa (low-rank adaptation) blocks, integrating them into the model and CLIP conditions for Stable Diffusion. It fills wildcards by dynamically generating prompts based on user input or fixed text, enhancing output creativity and adaptability. This node is essential for users seeking to improve AI‑generated content quality and relevance with advanced text‑encoding techniques.

# Input types
## Required
- model
    - Model parameters are critical because they define the base AI model used for text encoding and processing. They directly affect the quality and characteristics of the generated content, ensuring the output aligns with the model’s capabilities and training data.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - CLIP parameters are crucial for merging text with visual context, enabling the node to produce prompts that are coherent textually and relevant visually. They play a key role in keeping AI output consistent with the desired visual elements.
    - Comfy dtype: CLIP
    - Python dtype: CLIPModel
- token_normalization
    - The token_normalization parameter is important for preprocessing text tokens before encoding. It standardizes token values, improving the efficiency and accuracy of the encoding process and helping the AI model better understand the input.
    - Comfy dtype: COMBO
    - Python dtype: str
- weight_interpretation
    - The weight_interpretation parameter determines how the node interprets and applies weights during encoding. It influences emphasis on different text parts, significantly affecting the focus and detail of the final output.
    - Comfy dtype: COMBO
    - Python dtype: str
- wildcard_text
    - The wildcard_text parameter is core to the node’s function because it contains the template with wildcards that will be filled or replaced during encoding. It forms the basis for generating dynamic and adaptable prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- populated_text
    - The populated_text parameter stores the final text after wildcard processing, used for actual encoding and AI content generation. It is the result of the node’s main function and directly impacts the output.
    - Comfy dtype: STRING
    - Python dtype: str
- mode
    - The mode parameter controls whether the node generates dynamic prompts (Populate) based on user input or uses fixed text (Fixed). This setting is vital for determining the flexibility and adaptability of the generated prompts.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed parameter introduces randomness into the encoding process, allowing for diverse and unique outputs. It ensures that even with identical input, different results can be produced, increasing output variability.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- Select to add LoRA
    - The 'Select Add LoRA' parameter lets users incorporate specific LoRA blocks into the text, enhancing the encoding process with additional context. This can markedly improve the relevance and depth of AI‑generated content.
    - Comfy dtype: COMBO
    - Python dtype: str
- Select to add Wildcard
    - This parameter allows users to add specific wildcards to the text, which can be dynamically filled or replaced during encoding. It is a key aspect of customizing output to meet particular creative or thematic requirements.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- model
    - Model output is the updated AI model with encoded text and conditions, ready to generate content based on the input and processing parameters. It represents the result of the node’s encoding work.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - CLIP output integrates the input visual context, enhancing the AI’s ability to generate content that is not only textually coherent but also aligned with the provided CLIP visuals.
    - Comfy dtype: CLIP
    - Python dtype: CLIPModel
- conditioning
    - Conditional output provides the AI model with additional context and guidance, ensuring the generated content matches the specified theme and requirements. It is a key component for achieving targeted and relevant AI output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- populated_text
    - The populated_text output is the final processed text with wildcards filled or replaced, ready for use in the AI model’s generation process. It is the direct result of the node’s encoding and processing activities.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
