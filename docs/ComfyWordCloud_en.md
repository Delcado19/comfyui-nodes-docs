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
```
class ComfyWordCloud:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        return {'required': {'text': ('STRING', {'default': '', 'multiline': True}), 'width': ('INT', {'default': 512}), 'height': ('INT', {'default': 512}), 'scale': ('FLOAT', {'default': 1, 'min': 0.1, 'max': 1000.0, 'step': 0.01}), 'margin': ('INT', {'default': 0}), 'font_path': (font_list,), 'min_font_size': ('INT', {'default': 4}), 'max_font_size': ('INT', {'default': 128}), 'relative_scaling': ('FLOAT', {'default': 0.5, 'min': 0.01, 'max': 1.0, 'step': 0.01}), 'colormap': (COLOR_MAP,), 'background_color': ('STRING', {'default': '#FFFFFF'}), 'transparent_background': ('BOOLEAN', {'default': True}), 'prefer_horizontal': ('FLOAT', {'default': 0.9, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'max_words': ('INT', {'default': 200}), 'repeat': ('BOOLEAN', {'default': False}), 'include_numbers': ('BOOLEAN', {'default': False}), 'random_state': ('INT', {'default': -1, 'min': -1, 'max': 18446744073709551615}), 'stopwords': ('STRING', {'default': ''})}, 'optional': {'color_ref_image': ('IMAGE',), 'mask_image': ('IMAGE',), 'contour_width': ('FLOAT', {'default': 0, 'min': 0, 'max': 9999, 'step': 0.1}), 'contour_color': ('STRING', {'default': '#000000'}), 'keynote_words': ('STRING', {'default': ''}), 'keynote_weight': ('INT', {'default': 60})}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    RETURN_NAMES = ('image', 'mask')
    FUNCTION = 'wordcloud'
    CATEGORY = '😺dzNodes/WordCloud'
    OUTPUT_NODE = True

    def wordcloud(self, text, width, height, margin, scale, font_path, min_font_size, max_font_size, relative_scaling, colormap, background_color, transparent_background, prefer_horizontal, max_words, repeat, include_numbers, random_state, stopwords, color_ref_image=None, mask_image=None, contour_width=None, contour_color=None, keynote_words=None, keynote_weight=None):
        if text == '':
            text = default_text
            log(f'text input not found, use demo string.')
        freq_dict = WordCloud().process_text(' '.join(jieba.cut(text)))
        if not keynote_words == '':
            keynote_list = list(re.split('[，,\\s*]', keynote_words))
            keynote_list = [x for x in keynote_list if x != '']
            keynote_dict = {keynote_list[i]: keynote_weight + max(freq_dict.values()) for i in range(len(keynote_list))}
            freq_dict.update(keynote_dict)
        log(f'word frequencies dict generated, include {len(freq_dict)} words.')
        font_path = font_dict[font_path]
        if not os.path.exists(font_path):
            font_path = os.path.join(os.path.join(os.path.dirname(os.path.dirname(os.path.normpath(__file__))), 'font'), 'Alibaba-PuHuiTi-Heavy.ttf')
            log(f'font_path not found, use {font_path}')
        else:
            log(f'font_path = {font_path}')
        stopwords_set = set('')
        if not stopwords == '':
            stopwords_list = re.split('[，,\\s*]', stopwords)
            stopwords_set = set([x for x in stopwords_list if x != ''])
            for item in stopwords_set:
                if item in freq_dict.keys():
                    del freq_dict[item]
        bg_color = background_color
        mode = 'RGB'
        if transparent_background:
            bg_color = None
            mode = 'RGBA'
        if random_state == -1:
            random_state = None
        mask = None
        image_width = width
        image_height = height
        if not mask_image == None:
            p_mask = tensor2pil(mask_image)
            mask = np.array(img_whitebackground(p_mask))
            image_width = p_mask.width
            image_height = p_mask.height
        wc = WordCloud(width=width, height=height, scale=scale, margin=margin, font_path=font_path, min_font_size=min_font_size, max_font_size=max_font_size, relative_scaling=relative_scaling, colormap=colormap, mode=mode, background_color=bg_color, prefer_horizontal=prefer_horizontal, max_words=max_words, repeat=repeat, include_numbers=include_numbers, random_state=random_state, stopwords=stopwords_set, mask=mask, contour_width=contour_width, contour_color=contour_color)
        wc.generate_from_frequencies(freq_dict)
        if not color_ref_image == None:
            p_color_ref_image = tensor2pil(color_ref_image)
            p_color_ref_image = p_color_ref_image.resize((image_width, image_height))
            image_colors = ImageColorGenerator(np.array(p_color_ref_image))
            wc.recolor(color_func=image_colors)
        ret_image = wc.to_image().convert('RGBA')
        ret_mask = getRGBAmask(ret_image)
        return (pil2tensor(ret_image), ret_mask)
```