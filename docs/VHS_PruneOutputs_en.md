# Documentation
- Class name: PruneOutputs
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: True
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The method 'prune_outputs' is designed to manage and clean up intermediate and utility files generated in video processing workflows. It intelligently decides which files to delete based on specified options, ensuring the directory structure stays organized and only necessary files are retained.

# Input types
## Required
- filenames
    - The parameter 'filenames' is a list containing file names that the node will operate on. It plays a key role in identifying files to prune. The node uses this list to determine the scope of its operation and execute the file deletion process.
    - Comfy dtype: List[str]
    - Python dtype: List[str]
- options
    - The parameter 'options' determines the pruning behavior of the node. It specifies whether to delete intermediate files, utility files, or both. This parameter is crucial because it guides the node's decision process on which files to delete.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- None
    - The method 'prune_outputs' does not produce any output, since its main function is to delete files. It is a utility method that focuses on maintaining the cleanliness and organization of the file system, rather than generating new data or results.
    - Comfy dtype: NoneType
    - Python dtype: NoneType

# Usage tips
- Infra type: CPU

# Source code
```
class PruneOutputs:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'filenames': ('VHS_FILENAMES',), 'options': (['Intermediate', 'Intermediate and Utility'],)}}
    RETURN_TYPES = ()
    OUTPUT_NODE = True
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢'
    FUNCTION = 'prune_outputs'

    def prune_outputs(self, filenames, options):
        if len(filenames[1]) == 0:
            return ()
        assert len(filenames[1]) <= 3 and len(filenames[1]) >= 2
        delete_list = []
        if options in ['Intermediate', 'Intermediate and Utility', 'All']:
            delete_list += filenames[1][1:-1]
        if options in ['Intermediate and Utility', 'All']:
            delete_list.append(filenames[1][0])
        if options in ['All']:
            delete_list.append(filenames[1][-1])
        output_dirs = [os.path.abspath('output'), os.path.abspath('temp')]
        for file in delete_list:
            if os.path.commonpath([output_dirs[0], file]) != output_dirs[0] and os.path.commonpath([output_dirs[1], file]) != output_dirs[1]:
                raise Exception('Tried to prune output from invalid directory: ' + file)
            if os.path.exists(file):
                os.remove(file)
        return ()
```