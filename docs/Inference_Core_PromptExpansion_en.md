
# Documentation
- Class name: Inference_Core_PromptExpansion
- Category: utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Inference_Core_PromptExpansion node aims to enhance and expand input prompts using a pre‑trained language model. It automatically adjusts the input prompt based on a given seed, enriching the prompt by adding additional context or variants, and outputs the expanded version. The purpose of this process is to improve prompt quality and relevance for subsequent processing or generation tasks.

# Input types
## Required
- model_name
- Specify the model used for prompt expansion. It determines the language style and capability of the expansion.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text
- Provide the initial text prompt to be expanded. It serves as the base content that will be enriched and expanded to generate more detailed or varied output.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
- Supply an integer seed to influence variations in the expanded prompt. It ensures reproducibility of the expansion process, allowing consistent results across runs.
    - Comfy dtype: INT
    - Python dtype: int
- log_prompt
- Include a boolean flag to control whether to log the original and expanded prompts for debugging or analysis.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- expanded_prompt
- The enriched and expanded version of the original prompt, produced by integrating additional context or variants based on the seed.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
- The seed value used in the expansion process, returned for reference or further use.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class PromptExpansion:
    # noinspection PyPep8Naming,PyMethodParameters
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "model_name": (folder_paths.get_filename_list("prompt_expansion"),),
                "text": ("STRING", {"multiline": True}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xFFFFFFFF}),
                "log_prompt": ("BOOLEAN", {"default": False})
            },
        }

    RETURN_TYPES = (
        "STRING",
        "INT",
    )
    RETURN_NAMES = (
        "expanded_prompt",
        "seed",
    )
    FUNCTION = "expand_prompt"  # Function name

    CATEGORY = "utils"  # Category for organization

    @staticmethod
    @torch.no_grad()
    def expand_prompt(model_name: str, text: str, seed: int, log_prompt: bool):
        expansion = load_expansion_runner(model_name)

        prompt = remove_empty_str([safe_str(text)], default="")[0]

        max_seed = 1024 * 1024 * 1024
        if not isinstance(seed, int):
            seed = random.randint(1, max_seed)
        elif seed < 0:
            seed = abs(seed)
        elif seed > max_seed:
            seed = seed % max_seed
            
        prompt_parts = []
        expanded_parts = []
            
        # Split prompt if longer than 256
        if len(prompt) > 256:
            prompt_lines = prompt.splitlines()
            # Fill part until 256
            prompt_parts = [""]
            filled_chars = 0
            for line in prompt_lines:
                # When adding the line would exceed 256, start a new part
                if filled_chars + len(line) > 256:
                    prompt_parts.append(line)
                    filled_chars = len(line)
                else:
                    prompt_parts[-1] += line
                    filled_chars += len(line)
        else:
            prompt_parts = [prompt]
        
        for i, part in enumerate(prompt_parts):
            expansion_part = expansion(part, seed)
            full_part = join_prompts(part, expansion_part)
            expanded_parts.append(full_part)
            
        expanded_prompt = "\n".join(expanded_parts)
            
        if log_prompt:
            if logger.isEnabledFor(logging.INFO):
                logger.info(f"Prompt: {prompt!r}")
                logger.info(f"Expanded Prompt: {expanded_prompt!r}")
            else:
                print(f"Prompt: {prompt!r}")
                print(f"Expanded Prompt: {expanded_prompt!r}")

        return expanded_prompt, seed

```
