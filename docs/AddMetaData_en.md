# Documentation
- Class name: AddMetaData
- Category: Mikey/Meta
- Output node: True
- Repo Ref: https://github.com/bash-j/mikey_nodes

The AddMetaData node is designed to enrich image data by attaching textual information. It does this by appending a specified text value to the image's metadata, which can include dynamic elements such as dates or data from other nodes in the workflow. This node plays a key role in creating comprehensive metadata, enhancing the utility and context of images for a variety of application scenarios.

# Input types
## Required
- image
    - The image parameter is essential because it is the primary data object for the node's operation. It represents the image to which metadata will be added. The node's execution revolves around this image, making it a fundamental component of the process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or similar image object
- label
    - The label parameter serves as a descriptor for the metadata. It is a required field that provides a textual identifier for the metadata attached to the image. This label is important because it categorizes and describes the metadata being added.
    - Comfy dtype: STRING
    - Python dtype: str
- text_value
    - The text value parameter is crucial to the node's functionality, as it defines the specific text to be included in the image's metadata. This text can be static or dynamic, allowing metadata to be enriched in a flexible manner.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prompt
    - The optional prompt parameter can be used to inject dynamic data into the metadata. It is especially useful when the metadata needs information from other nodes or components in the workflow, enabling a more interactive and context‑aware metadata creation process.
    - Comfy dtype: PROMPT
    - Python dtype: dict or str
- extra_pnginfo
    - The additional PNG info parameter, while optional, can provide extra context or details specific to the image. It can be used to store supplementary information that does not belong to the main metadata section but is still relevant for certain applications or analyses.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: dict or str

# Output types
- image_with_metadata
    - The output of the AddMetaData node is the original image with the added metadata. This output represents the result of the node's processing, where the image is now enriched with the specified text value and ready for further use or distribution.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or similar image object

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
