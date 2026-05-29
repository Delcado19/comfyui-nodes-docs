
# Documentation
- Class name: FaceStylerAdvanced
- Category: ali1234/stylers
- Output node: False

FaceStylerAdvanced node aims to apply advanced beautification techniques to faces in images using deep learning models, enhancing or altering facial features according to specified styles or parameters. The focus of this node is to provide users with the ability to customize and refine the appearance of faces in digital content, offering a range of dynamically applicable beautification options to achieve desired aesthetic effects.

# Input types
## Required
- text_positive_g
    - This parameter represents global positive text descriptors or keywords, used to guide the overall beautification process, influencing the node's output by specifying general aspects to enhance or introduce.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - This parameter focuses on local positive text descriptors or keywords, allowing more detailed guidance for specific facial features or areas to enhance according to beautification preferences.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Captures negative text descriptors or keywords, indicating aspects to avoid or minimize in facial beautification, helping to guide the output away from unwanted features or effects.
    - Comfy dtype: STRING
    - Python dtype: str
- face
    - Allows the user to input the face or multiple faces to be beautified, as the direct objects of the beautification process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- negative_prompt_to
    - Specifies the application scope of negative prompts, which can be global, local, or both, thus affecting how negative descriptors influence the result.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - Used for logging purposes, captures the input prompt describing the desired facial beautification result. It helps track and optimize the beautification process based on user feedback and preferences.
    - Comfy dtype: BOOLEAN
    - Python dtype: str

# Output types
- text_positive_g
    - Represents the global enhancement effect achieved through the beautification process, described by positive text descriptors or keywords.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Captures the local enhancement effect on specific facial features or areas, guided by detailed positive text descriptors.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - Comfy dtype: STRING
    - Python dtype: unknown
- text_negative_g
    - This output captures the global aspects of facial beautification that have been successfully minimized or avoided, as indicated by negative text descriptors or keywords.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - Represents the local aspects of facial beautification that have been successfully minimized or avoided, focusing on specific facial features or areas.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Comfy dtype: STRING
    - Python dtype: unknown


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
