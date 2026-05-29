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
```
class TripoSRViewer:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mesh': ('MESH',)}}
    RETURN_TYPES = ()
    OUTPUT_NODE = True
    FUNCTION = 'display'
    CATEGORY = 'Flowty TripoSR'

    def display(self, mesh):
        saved = list()
        (full_output_folder, filename, counter, subfolder, filename_prefix) = get_save_image_path('meshsave', get_output_directory())
        for (batch_number, single_mesh) in enumerate(mesh):
            filename_with_batch_num = filename.replace('%batch_num%', str(batch_number))
            file = f'{filename_with_batch_num}_{counter:05}_.obj'
            single_mesh.apply_transform(np.array([[1, 0, 0, 0], [0, 0, 1, 0], [0, -1, 0, 0], [0, 0, 0, 1]]))
            single_mesh.export(path.join(full_output_folder, file))
            saved.append({'filename': file, 'type': 'output', 'subfolder': subfolder})
        return {'ui': {'mesh': saved}}
```