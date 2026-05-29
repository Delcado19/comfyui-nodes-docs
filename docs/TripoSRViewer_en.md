# Documentation
- Class name: TripoSRViewer
- Category: Flowty TripoSR
- Output node: True
- Repo Ref: https://github.com/flowtyone/ComfyUI-Flowty-TripoSR

The display method of the TripoSRViewer class is designed to visualize and export 3D meshes. It processes the input mesh through a series of transformations to prepare it for visualization, and saves the modified mesh in a specified directory structure. This method enhances the user's ability to review and analyze the output of 3D rendering tasks, contributing to the overall workflow of 3D model manipulation and evaluation.

# Input types
## Required
- mesh
    - The mesh parameter is essential for the display method, as it represents the 3D model that needs to be visualized and exported. It directly affects the result of node execution by determining the object to be processed and displayed. The quality and properties of the mesh influence the final visualization and exported files, making it a critical component of node operation.
    - Comfy dtype: MESH
    - Python dtype: torch_geometric.data.Batch

# Output types
- mesh
    - The output mesh parameter represents the modified and saved 3D model after the display method execution. It is important because it provides the user with a tangible result of the visualization process, allowing for further analysis or use in downstream applications. The output mesh serves as a key link in the 3D model manipulation chain, demonstrating the effectiveness of the applied transformations.
    - Comfy dtype: MESH
    - Python dtype: List[Dict[str, Union[str, int, List[str]]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/flowtyone/ComfyUI-Flowty-TripoSR)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
