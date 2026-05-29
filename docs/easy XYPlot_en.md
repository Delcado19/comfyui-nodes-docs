# Documentation
- Class name: pipeXYPlot
- Category: EasyUse/Pipe
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The pipeXYPlot node aims to simplify the process of generating and managing XY plots, providing users with a streamlined interface to visualize data relationships. It focuses on delivering a user-friendly experience, enabling the creation of charts with various customization options even without extensive technical knowledge.

# Input types
## Required
- grid_spacing
    - Grid spacing is a critical parameter that determines the resolution of the chart. It affects the granularity of the visualization, with higher values resulting in a coarser representation, while lower values provide finer detail.
    - Comfy dtype: INT
    - Python dtype: int
- output_individuals
    - Output individual parameters allow users to control whether each data point is plotted separately. This can significantly impact chart clarity, especially when working with large datasets.
    - Comfy dtype: BOOL
    - Python dtype: bool
- flip_xy
    - Enabling flip XY allows users to reverse the axes of the chart, which is useful for aligning data according to specific conventions or for better visual representation.
    - Comfy dtype: BOOL
    - Python dtype: bool
- x_axis
    - The x_axis parameter is essential for defining the horizontal axis of the chart. It determines the categories or variables used to represent x values, shaping the overall structure of the chart.
    - Comfy dtype: COMBO
    - Python dtype: str
- x_values
    - X values are crucial for chart construction as they provide the data points for the x-axis. Correct input of these values ensures the accuracy and relevance of the chart representation.
    - Comfy dtype: STRING
    - Python dtype: str
- y_axis
    - The y_axis parameter is essential for defining the vertical axis of the chart. It specifies the categories or variables used to represent y values, influencing the overall interpretation of the data.
    - Comfy dtype: COMBO
    - Python dtype: str
- y_values
    - Y values are critical for plotting as they represent the data points on the y-axis. Accurate input of these values is necessary for a true reflection of the data in the chart.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- pipe
    - The output named 'pipe' is a comprehensive structure containing the entire chart configuration, including axes, values, and other settings. It serves as the channel for the visualization process, ensuring the chart is generated according to user specifications.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict

# Usage tips
- Infra type: CPU

# Source code
```
class pipeXYPlot:
    lora_list = ['None'] + folder_paths.get_filename_list('loras')
    lora_strengths = {'min': -4.0, 'max': 4.0, 'step': 0.01}
    token_normalization = ['none', 'mean', 'length', 'length+mean']
    weight_interpretation = ['comfy', 'A1111', 'compel', 'comfy++']
    loader_dict = {'ckpt_name': folder_paths.get_filename_list('checkpoints'), 'vae_name': ['Baked-VAE'] + folder_paths.get_filename_list('vae'), 'clip_skip': {'min': -24, 'max': -1, 'step': 1}, 'lora_name': lora_list, 'lora_model_strength': lora_strengths, 'lora_clip_strength': lora_strengths, 'positive': [], 'negative': []}
    sampler_dict = {'steps': {'min': 1, 'max': 100, 'step': 1}, 'cfg': {'min': 0.0, 'max': 100.0, 'step': 1.0}, 'sampler_name': comfy.samplers.KSampler.SAMPLERS, 'scheduler': comfy.samplers.KSampler.SCHEDULERS, 'denoise': {'min': 0.0, 'max': 1.0, 'step': 0.01}, 'seed': {'min': 0, 'max': MAX_SEED_NUM}}
    plot_dict = {**sampler_dict, **loader_dict}
    plot_values = ['None']
    plot_values.append('---------------------')
    for k in sampler_dict:
        plot_values.append(f'preSampling: {k}')
    plot_values.append('---------------------')
    for k in loader_dict:
        plot_values.append(f'loader: {k}')

    def __init__(self):
        pass
    rejected = ['None', '---------------------', 'Nothing']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'grid_spacing': ('INT', {'min': 0, 'max': 500, 'step': 5, 'default': 0}), 'output_individuals': (['False', 'True'], {'default': 'False'}), 'flip_xy': (['False', 'True'], {'default': 'False'}), 'x_axis': (pipeXYPlot.plot_values, {'default': 'None'}), 'x_values': ('STRING', {'default': '', 'multiline': True, 'placeholder': 'insert values seperated by "; "'}), 'y_axis': (pipeXYPlot.plot_values, {'default': 'None'}), 'y_values': ('STRING', {'default': '', 'multiline': True, 'placeholder': 'insert values seperated by "; "'})}, 'optional': {'pipe': ('PIPE_LINE',)}, 'hidden': {'plot_dict': (pipeXYPlot.plot_dict,)}}
    RETURN_TYPES = ('PIPE_LINE',)
    RETURN_NAMES = ('pipe',)
    FUNCTION = 'plot'
    CATEGORY = 'EasyUse/Pipe'

    def plot(self, grid_spacing, output_individuals, flip_xy, x_axis, x_values, y_axis, y_values, pipe=None):

        def clean_values(values):
            original_values = values.split('; ')
            cleaned_values = []
            for value in original_values:
                cleaned_value = value.strip(';').strip()
                if cleaned_value == '':
                    continue
                try:
                    cleaned_value = int(cleaned_value)
                except ValueError:
                    try:
                        cleaned_value = float(cleaned_value)
                    except ValueError:
                        pass
                cleaned_values.append(cleaned_value)
            return cleaned_values
        if x_axis in self.rejected:
            x_axis = 'None'
            x_values = []
        else:
            x_values = clean_values(x_values)
        if y_axis in self.rejected:
            y_axis = 'None'
            y_values = []
        else:
            y_values = clean_values(y_values)
        if flip_xy == 'True':
            (x_axis, y_axis) = (y_axis, x_axis)
            (x_values, y_values) = (y_values, x_values)
        xy_plot = {'x_axis': x_axis, 'x_vals': x_values, 'y_axis': y_axis, 'y_vals': y_values, 'grid_spacing': grid_spacing, 'output_individuals': output_individuals}
        if pipe is not None:
            new_pipe = pipe
            new_pipe['loader_settings'] = {**pipe['loader_settings'], 'xyplot': xy_plot}
            del pipe
        return (new_pipe, xy_plot)
```