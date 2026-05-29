
# Documentation
- Class name: FaceStyler
- Category: ali1234/stylers
- Output node: False

The FaceStyler node is specifically designed to apply particular style effects to facial features in images. It utilizes a predefined collection of styles, enhancing or altering the appearance of faces based on user-selected options.

# Input types
## Required
- text_positive
    - Specifies positive text content that influences the styling process, helping to generate styled facial features in the image.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Specifies negative text content that influences the styling process, used to counteract certain styles or features, in order to generate styled facial images.
    - Comfy dtype: STRING
    - Python dtype: str
- face
    - The input image containing the face that requires styling, serving as the direct object for applying style effects.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Image
- log_prompt
    - A boolean flag that, when enabled, logs style selection and text content input for debugging or informational purposes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - Output text reflecting the applied positive style effects.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Output text reflecting the applied negative style effects.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
