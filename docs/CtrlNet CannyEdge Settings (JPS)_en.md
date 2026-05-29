
# Documentation
- Class name: CtrlNet CannyEdge Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False
- Repo Ref: https://github.com/jps-yes/ComfyUI_JPS

This node configures the Canny edge detection process settings in the pipeline, allowing users to specify parameters such as edge detection strength, start and end thresholds, and low and high thresholds.

# Input types
## Required
- cannyedge_from
    - Specifies the image source for Canny edge detection, allowing selection from predefined sources such as "Source Image", "Support Image", or "Direct Support".
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cannyedge_strength
    - Determines the strength of the edge detection process, with a range allowing fine-tuning of edge detection sensitivity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cannyedge_start
    - Sets the start threshold for edge detection, controlling the minimum edge strength to be considered.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cannyedge_end
    - Defines the end threshold for edge detection, allowing users to limit the maximum edge strength to be detected.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cannyedge_low
    - Specifies the low threshold for the hysteresis process in Canny edge detection, affecting the detection of weaker edges.
    - Comfy dtype: INT
    - Python dtype: int
- cannyedge_high
    - Sets the high threshold for the hysteresis process in Canny edge detection, affecting the detection of stronger edges.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- cannyedge_settings
    - Outputs the configured Canny edge detection settings as a tuple, ready for direct use in the detection process.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, float, float, float, int, int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/jps-yes/ComfyUI_JPS)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
