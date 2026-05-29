
# Documentation
- Class name: `PerfectionStyler`
- Category: `ali1234/stylers`
- Output node: `False`

The PerfectionStyler node aims to enhance and beautify image generation prompts by applying a comprehensive set of style adjustments. It focuses on optimizing various aspects of the image such as camera settings, composition, lighting, and atmosphere to achieve a more aesthetically pleasing and thematically consistent output.

# Input types
## Required
- **`text_positive`**
    - The 'text_positive' input represents the initial positive prompt describing the desired image. This input is crucial as it serves as the basis for the node to apply style enhancements, influencing the final output in terms of subject, atmosphere, and overall composition.
    - Comfy dtype: `STRING`
    - Python dtype: `str`
- **`text_negative`**
    - The 'text_negative' input is used to specify unwanted elements or subjects in the generated image. It plays an important role in refining the output by preventing certain aspects from appearing, ensuring the final image more closely aligns with the user's vision.
    - Comfy dtype: `STRING`
    - Python dtype: `str`
- **`camera`**
    - The 'camera' input allows users to specify preferences related to camera settings, such as angle and focus, to influence the visual perspective of the generated image.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`composition`**
    - This input enables users to define the composition of the image, including the arrangement of subjects and objects, to create a balanced and engaging visual.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`depth`**
    - The 'depth' input helps adjust the perceived depth of the image, enhancing the 3D effect and spatial relationships between elements.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`environment`**
    - Users can specify environmental settings such as indoor or outdoor, weather conditions, and time of day to match the desired context of the image.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`filter`**
    - This input allows the application of visual filters to alter the image's color, contrast, and overall atmosphere.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`focus`**
    - The 'focus' input controls the area of focus in the image, highlighting specific subjects or blurring the background to draw attention.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`lighting`**
    - Users can specify lighting conditions, such as the direction and intensity of light, to enhance the realism and atmosphere of the image.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`mood`**
    - The 'mood' input allows users to convey the desired emotional tone or atmosphere of the image, influencing its thematic direction.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`subject`**
    - This input specifies the main subject of the image, such as a person, object, or scene, to ensure it aligns with the user's vision.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`theme`**
    - The 'theme' input enables users to define a specific theme or concept for the image, guiding its stylistic and compositional direction.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`timeofday`**
    - Users can specify the time of day for the image, affecting lighting, shadows, and overall atmosphere.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`log_prompt`**
    - The 'log_prompt' input is an optional parameter that enables logging of the transformation process. It provides insights into how the initial prompt is modified and stylized, offering transparency and understanding of the node's operation.
    - Comfy dtype: `BOOLEAN`
    - Python dtype: `bool`

# Output types
- **`text_positive`**
    - Comfy dtype: `STRING`
    - The modified 'text_positive' output reflects the enhanced and stylized version of the initial prompt, incorporating the style adjustments made by the node to better capture the desired image and subject.
    - Python dtype: `str`
- **`text_negative`**
    - Comfy dtype: `STRING`
    - The modified 'text_negative' output provides an updated list of unwanted elements or subjects, refined during the stylization process to ensure the final image more accurately reflects the user's preferences.
    - Python dtype: `str`


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
