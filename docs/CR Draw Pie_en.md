# Documentation
- Class name: CR_DrawPie
- Category: Comfyroll/Graphics/Shape
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_DrawPie is a node designed to generate visual representations of pie charts. It allows customization of the pie chart's appearance, including its size, start and end angles, colors, and rotation. The node's functionality focuses on creating graphical representations of data segments, making it a versatile tool for visualizing proportions and distributions.

# Input types
## Required
- width
    - Width determines the pie chart's width and is a key parameter for setting the overall size of the output image. It directly affects the visual proportion and aspect ratio of the pie chart.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height sets the vertical range of the pie chart and, together with width, determines the chart's proportion. It plays an important role in the final appearance of the pie chart, ensuring a balanced visual representation.
    - Comfy dtype: INT
    - Python dtype: int
- pie_start
    - Pie start is the initial angle where a pie segment begins. It is crucial for defining the starting position of segments and contributes to the overall composition of the pie chart.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pie_stop
    - Pie end is the angle where a pie segment ends. It works with pie start to determine the size and range of segments within the pie chart.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shape_color
    - Shape color defines the color of a pie segment, allowing users to customize the appearance of data representation. This is a key aspect of visual design and can convey different meanings or categories.
    - Comfy dtype: COLORS
    - Python dtype: str
- back_color
    - Background color sets the background color of the pie chart, providing contrast or complementary tones to the shape color. It is an important parameter for enhancing the chart's visual appeal and clarity.
    - Comfy dtype: COLORS
    - Python dtype: str
## Optional
- x_offset
    - X offset adjusts the horizontal position of the pie chart within the canvas. It can be used to align multiple charts or position a chart for aesthetic purposes.
    - Comfy dtype: INT
    - Python dtype: int
- y_offset
    - Y offset adjusts the vertical position of the pie chart within the canvas. Like X offset, it helps position the chart for optimal visual presentation.
    - Comfy dtype: INT
    - Python dtype: int
- zoom
    - Scale is a proportional factor that adjusts the size of the pie chart relative to its original dimensions. It can be used to emphasize the chart or fit it into a specific space.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation
    - Rotation allows rotation around the center of the pie chart. This can orient the chart to a specific direction or create dynamic visual effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shape_color_hex
    - Shape color hex provides the hexadecimal color code for a pie segment, offering precise control over color usage. It is an alternative to the shape color parameter for users needing specific color values.
    - Comfy dtype: STRING
    - Python dtype: str
- bg_color_hex
    - Background color hex specifies the hexadecimal color code for the pie chart's background, allowing fine‑tuning of the background color to meet specific design requirements.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - IMAGE output provides the generated pie chart as an image file. This is the primary result of the node operation, containing the visual representation of the input data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL link to the documentation page for further help or information about node usage and features.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
