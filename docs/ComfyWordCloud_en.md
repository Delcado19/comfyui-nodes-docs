# Documentation
- Class name: ComfyWordCloud
- Category: 😺dzNodes/WordCloud
- Output node: True
- Repo Ref: https://github.com/chflame163/ComfyUI_WordCloud.git

The ComfyWordCloud node visualizes text data by generating a word cloud, a graphic representation that shows word frequency in the input text. The node helps identify the most common words and their contextual importance, providing an easily understandable visual summary.

# Input types
## Required
- text
- The text parameter is the node's primary input, containing the text data to be processed into a word cloud. It is crucial because it directly determines the words and their distribution in the cloud.
    - Comfy dtype: STRING
    - Python dtype: str
- width
- The width parameter defines the width of the generated word‑cloud image, affecting layout and scaling of the visual representation. It is important for adjusting the canvas size to fit the desired aspect ratio and display dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- height
- The height parameter sets the height of the word‑cloud image, together with the width determining the overall size and aspect ratio of the output visualization.
    - Comfy dtype: INT
    - Python dtype: int
- scale
- The scale parameter adjusts the overall size of the word cloud by proportionally increasing or decreasing word font sizes. This is essential for fine‑tuning density and appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- margin
- The margin parameter specifies the amount of blank space to retain at the edges of the word‑cloud image, enhancing clarity and focus on the central content.
    - Comfy dtype: INT
    - Python dtype: int
- font_path
- The font path parameter is critical for defining the font style and characteristics used in the word cloud. It influences visual aesthetics and readability of the text within the cloud.
    - Comfy dtype: FONT_PATH
    - Python dtype: str
- min_font_size
- The minimum font size parameter sets the smallest font size used in the word cloud, ensuring less frequent words appear at a reduced size, supporting hierarchy and emphasis on more common words.
    - Comfy dtype: INT
    - Python dtype: int
- max_font_size
- The maximum font size parameter determines the largest font size in the word cloud, crucial for highlighting the highest‑frequency words and establishing visual prominence.
    - Comfy dtype: INT
    - Python dtype: int
- relative_scaling
- The relative scaling parameter adjusts font‑size scaling based on word frequency, helping control the degree of emphasis on more common words.
    - Comfy dtype: FLOAT
    - Python dtype: float
- colormap
- The color map parameter is vital for defining the word‑cloud color scheme, affecting visual appeal and the ability to convey different word frequencies through color variation.
    - Comfy dtype: COLOR_MAP
    - Python dtype: str
- background_color
- The background color parameter sets the background color of the word cloud, influencing overall contrast and text visibility.
    - Comfy dtype: STRING
    - Python dtype: str
- transparent_background
- The transparent background parameter determines whether the word‑cloud background is transparent, which may be important when overlaying the cloud on other images or elements.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- prefer_horizontal
- The prefer horizontal parameter influences word orientation; higher values promote a more horizontal distribution, affecting layout and readability.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_words
- The maximum words parameter limits the number of words displayed in the cloud, focusing on the most relevant and frequent terms and improving visual clarity.
    - Comfy dtype: INT
    - Python dtype: int
- repeat
- The repeat parameter controls whether a word may appear multiple times in the cloud, affecting visual representation of frequency and overall density.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- include_numbers
- The include numbers parameter decides whether numeric values should be included in the cloud, which can be important for certain text‑analysis tasks.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_state
- The random state parameter introduces randomness into word placement, leading to varied visual results and increased layout variability.
    - Comfy dtype: INT
    - Python dtype: int
- stopwords
- The stopwords parameter allows exclusion of common words that carry little meaning, optimizing the cloud to emphasize more relevant terms.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- color_ref_image
- The color reference image parameter uses a reference image to define the cloud's color palette, producing a visually coherent and context‑related representation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- mask_image
- The mask image parameter provides a shape or pattern that restricts the cloud layout, ensuring words stay within defined mask boundaries.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- contour_width
- The contour width parameter adjusts the width of the outline surrounding the word cloud, enhancing definition and separation from the background.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contour_color
- The contour color parameter sets the color of the outline surrounding the word cloud, aiding overall visual contrast and aesthetics.
    - Comfy dtype: STRING
    - Python dtype: str
- keynote_words
- The theme words parameter allows specification of words that should be emphasized in the cloud, potentially highlighting key topics or themes in the text.
    - Comfy dtype: STRING
    - Python dtype: str
- keynote_weight
    - Theme weight parameter adjusts the weight assigned to theme words, affecting their prominence and size in the word cloud.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Image output provides the generated word cloud as a visual representation of the input text, with word size and color adjusted based on frequency and importance.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- mask
    - Mask output is a binary representation outlining the shape and boundaries of the word cloud, usable for further image processing or analysis.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_WordCloud)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
