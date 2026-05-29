
# Documentation
- Class name: TimeofdayStyler
- Category: ali1234/stylers
- Output node: False

The TimeofdayStyler node dynamically customizes text prompts based on style preferences for different times of day, using a series of predefined templates to enhance or modify descriptive elements in the prompt. This node is designed to provide nuanced and contextually relevant adjustments for text generation tasks, with a particular focus on atmosphere and lighting conditions associated with different times of day.

# Input types
## Required
- text_positive
    - The positive text prompt to be stylized, serving as the base content for time-of-day-specific enhancements. This input is crucial for adjusting the output to reflect the desired atmospheric conditions.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be stylized, used to negate or balance specific elements during the generation process. This input helps optimize the output by excluding unwanted time-of-day characteristics.
    - Comfy dtype: STRING
    - Python dtype: str
- timeofday
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- log_prompt
    - Unknown
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown

# Output types
- text_positive
    - The enhanced positive text prompt, enriched with time-of-day-specific characteristics to better reflect the desired atmosphere and lighting conditions.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The optimized negative text prompt, stylized to exclude or negate unwanted time-of-day elements, ensuring a more focused and relevant text generation output.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
