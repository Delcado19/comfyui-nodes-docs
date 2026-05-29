# Documentation
- Class name: IPAdapterWeights
- Category: ipadapter/utils
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The `weights` method of the IPAdapterWeights node is designed to process and interpolate a series of weights according to a specified timing function. It accepts a weights string, a timing parameter, and frame details to generate a list of weights that can be applied to a sequence of frames. This method is crucial for adjusting the influence of different components in a model or system over time, allowing for dynamic adjustments.

# Input types
## Required
- weights
    - The ‘weights’ parameter is a string containing a comma-separated list of floating point numbers. It is crucial for defining the initial set of weights that the node will process and interpolate over time. The way these weights are applied can significantly affect the output of the system or model in which they are integrated.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- timing
    - The ‘timing’ parameter determines the timing function used when interpolating weights over the specified frames. It can be one of several predefined options, each producing a different rate of weight change over time. This parameter is important for controlling the pace of transitions between different weight values.
    - Comfy dtype: COMBO['custom', 'linear', 'ease_in_out', 'ease_in', 'ease_out', 'reverse_in_out', 'random']
    - Python dtype: str
- frames
    - The ‘frames’ parameter specifies the total number of frames over which the weights will be applied. It is an integer value that sets the upper limit for the duration of the weight sequence. This parameter is important for defining the scope of the weight application and ensuring it aligns with the timing requirements of the system.
    - Comfy dtype: INT
    - Python dtype: int
- start_frame
    - The ‘start_frame’ parameter indicates the frame number at which the weight sequence should start. It allows customization of the start time of the weight application within the overall frame sequence. This is particularly useful for synchronizing the weight application with other events or processes in the system.
    - Comfy dtype: INT
    - Python dtype: int
- end_frame
    - The ‘end_frame’ parameter defines the frame number at which the weight sequence ends. It is used to control the end point of the weight application, ensuring that weights are only applied up to a specific point in the frame sequence. This helps in creating more nuanced and controlled effects in the system.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- weights
    - The output ‘weights’ is a list of floating point numbers representing the processed and interpolated weights to be applied to the frame sequence. This output is very important because it directly affects the behavior of the model or system in which the weights are integrated.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
