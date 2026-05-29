# Documentation
- Class name: CreatePromptVariant
- Category: OneButtonPrompt
- Output node: False
- Repo Ref: https://github.com/AIrjen/OneButtonPrompt

The CreatePromptVariant node is designed to generate diverse and creative text prompts based on user input and additional parameters. It constructs unique and engaging text prompts by manipulating and combining various elements such as objects, characters, and scenes, making it suitable for a wide range of content creation and creative generation applications.

# Input types
## Required
- prompt_input
    - The input prompt serves as the foundation for the node's operations, providing context and theme for the generated content. It is crucial for setting the initial direction and scope of the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- insanitylevel
    - The craziness level parameter controls the degree of variation and creativity applied to the input prompt. Higher levels produce more diverse and potentially unconventional outputs, introducing a broader range of ideas and possibilities.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter is used to ensure reproducibility of the node's output. By specifying a seed, users can generate consistent results across different runs, which is highly beneficial for testing and debugging.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- prompt
    - The output is a modified and enhanced version of the original prompt based on the input parameters. It incorporates various elements and adjustments, representing new creative directions that can inspire further development and exploration.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/AIrjen/OneButtonPrompt)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
