# Documentation
- Class name: BatchValueScheduleLatentInput
- Category: FizzNodes 📅🅕🅝/BatchScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The BatchValueScheduleLatentInput node is designed to process and animate a batch of latent inputs according to a given text schedule. It interprets the text to generate keyframes and interpolates the values accordingly, providing smooth transitions between keyframes. This node is particularly suitable for creating animations or transformations where smooth progression of latent variables is required.

# Input types
## Required
- text
    - The parameter 'text' defines the schedule for the latent input animation. It is a string that specifies keyframes and their corresponding values, used to generate the animation sequence. This parameter is crucial as it determines the pattern of the animation and the values the latent inputs will take over the process.
    - Comfy dtype: STRING
    - Python dtype: str
- num_latents
    - The parameter 'num_latents' is a dictionary containing latent variables to be animated. Each key in the dictionary corresponds to a different latent variable, and the values are tensors representing the initial states of these variables. This parameter is crucial as it provides the starting point for the animation and defines the variables that will be manipulated over time.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- print_output
    - The parameter 'print_output' is a boolean flag that, when set to True, prints the generated keyframes and their interpolation results to the console. This is useful for debugging or visualizing the animation sequence before further processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- t
    - The output 't' represents the interpolated keyframes generated from the input text schedule. It is a sequence of floats indicating the progression of the animation over time.
    - Comfy dtype: FLOAT
    - Python dtype: pandas.Series
- list(map(int, t))
    - This output is a list of integers derived from the interpolated keyframes. It provides a discretized version of the animation sequence, useful for applications that require integer values instead of floats.
    - Comfy dtype: INT
    - Python dtype: List[int]
- num_latents
    - The output 'num_latents' is the dictionary of latent variables animated according to the input schedule. It contains the updated states of the latent variables after the animation process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class BatchValueScheduleLatentInput:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True, 'default': defaultValue}), 'num_latents': ('LATENT',), 'print_output': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('FLOAT', 'INT', 'LATENT')
    FUNCTION = 'animate'
    CATEGORY = 'FizzNodes 📅🅕🅝/BatchScheduleNodes'

    def animate(self, text, num_latents, print_output):
        num_elements = sum((tensor.size(0) for tensor in num_latents.values()))
        max_frames = num_elements
        t = batch_get_inbetweens(batch_parse_key_frames(text, max_frames), max_frames)
        if print_output is True:
            print('ValueSchedule: ', t)
        return (t, list(map(int, t)), num_latents)
```