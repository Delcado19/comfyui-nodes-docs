# Documentation
- Class name: ComposeVec4
- Category: math/conversion
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The ComposeVec4 node combines four separate float values into a Vec4 object. It plays a key role in converting and aggregating spatial or color data in mathematical operations. The node simplifies creating a four‑dimensional vector from scalar components, which is essential for various computational geometry and graphics applications.

# Input types
## Required
- x
    - Parameter 'x' represents the first component of the four‑dimensional vector. It is crucial for defining the spatial direction or color intensity in the generated Vec4 object. This parameter directly influences the result of the vector composition and is an indispensable part of the node's functionality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y
    - Parameter 'y' denotes the second component of the Vec4, contributing to the vector's overall structure. It is vital for applications that require a complete representation of spatial or color data, ensuring the node produces a well‑defined vector.
    - Comfy dtype: FLOAT
    - Python dtype: float
- z
    - Parameter 'z' indicates the third component of the four‑dimensional vector. It is a key element in vector construction, especially for three‑dimensional space representation or color channel handling. The 'z' value is essential for the node's ability to generate meaningful vectors from the components.
    - Comfy dtype: FLOAT
    - Python dtype: float
- w
    - Parameter 'w' is the fourth and final component of the Vec4 object. It typically conveys additional information, such as perspective in homogeneous coordinates or the alpha channel in color data. Including 'w' completes the vector, enabling full representation in various mathematical and graphics contexts.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- Vec4
    - The output of the ComposeVec4 node is a Vec4 object that encapsulates the four input parameters into a consistent structure. This output is critical because it provides a unified representation for downstream processing or analysis, facilitating seamless integration of vector data in computational workflows.
    - Comfy dtype: VEC4
    - Python dtype: Vec4

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
