# Documentation
- Class name: DPFeelingLucky
- Category: Sampling
- Output node: False
- Repo Ref: https://github.com/adieyal/comfyui-dynamicprompts.git

This node aims to generate creative and potentially unexpected prompts by leveraging random seeds and lucky feeling methods. It is designed to introduce variability and novelty into the sampling process, contributing to the diversity of output results.

# Input types
## Required
- text
    - The input text serves as the foundation for generating prompts. It is critical because it provides context and content for the node, directly influencing the relevance and creativity of the generated prompts.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- seed
    - The seed parameter is essential for controlling the randomness of generated prompts. It ensures that the same input text produces consistent results when the seed is fixed, which is useful for debugging and reproducibility.
    - Comfy dtype: int
    - Python dtype: int
- autorefresh
    - The auto-refresh parameter can be used to determine whether the node should automatically generate new prompts based on changes in the input text. It affects the responsiveness of the node and the dynamic nature of the content generation process.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- prompt
    - The output is a generated prompt, which is the result of the node's operation. It represents creative and potentially novel content derived from the input text and the randomness introduced by the seed.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class DPFeelingLucky(DPAbstractSamplerNode):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._random_generator = RandomPromptGenerator(wildcard_manager=self._wildcard_manager)
        self._prompt_generator = FeelingLuckyGenerator(generator=self._random_generator)

    def get_prompt(self, text: str, seed: int, autorefresh: str) -> tuple[str]:
        """
        Main entrypoint for this node.
        Using the sampling context, generate a new prompt.
        """
        if seed > 0:
            self.context.rand.seed(seed)
        if text.strip() == '':
            return ('',)
        try:
            prompt = self._prompt_generator.generate(text, 1)[0]
            return (str(prompt),)
        except Exception as e:
            logger.exception(e)
            return ('',)

    @property
    def context(self) -> SamplingContext:
        return self._random_generator._context
```