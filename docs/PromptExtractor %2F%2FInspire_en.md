# Documentation
- Class name: PromptExtractor
- Category: InspirePack/Prompt
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The PromptExtractor node analyzes image files and extracts relevant prompt information, which can be used to generate creative prompts or guide workflows. It processes image metadata to identify required inputs and outputs, and builds a textual representation of the prompt structure.

# Input types
## Required
- image
    - Image parameters are critical because they are the primary input for the node's analysis. The expected image files reside in the input directory and have a valid format.
    - Comfy dtype: COMBO[sorted_files]
    - Python dtype: str
- positive_id
    - The positive_id parameter is essential for identifying the positive aspects of a prompt. It helps filter relevant information from the extracted prompt data, contributing to the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_id
    - The negative_id parameter specifies the negative aspects of a prompt. It functions to exclude certain information from the final output, ensuring relevance and accuracy of the extracted data.
    - Comfy dtype: STRING
    - Python dtype: str
- info
    - The info parameter contains metadata about the image, which is crucial for the node to understand the context and structure of the prompt. It is vital for accurately extracting and representing prompt information.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- unique_id
    - The unique_id parameter is the identifier for the node's operation, aiding in tracking and managing the node's execution within the workflow.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- positive
    - Positive output represents extracted information that matches the positive_id parameter, contributing to the creative process by providing constructive aspects of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - Negative output captures extracted information that matches the negative_id parameter, helping refine the creative process by excluding unwanted aspects of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class PromptExtractor:

    @classmethod
    def INPUT_TYPES(s):
        input_dir = folder_paths.get_input_directory()
        files = [f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f))]
        return {'required': {'image': (sorted(files), {'image_upload': True}), 'positive_id': ('STRING', {}), 'negative_id': ('STRING', {}), 'info': ('STRING', {'multiline': True})}, 'hidden': {'unique_id': 'UNIQUE_ID'}}
    CATEGORY = 'InspirePack/Prompt'
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('positive', 'negative')
    FUNCTION = 'doit'
    OUTPUT_NODE = True

    def doit(self, image, positive_id, negative_id, info, unique_id):
        image_path = folder_paths.get_annotated_filepath(image)
        info = Image.open(image_path).info
        positive = ''
        negative = ''
        text = ''
        prompt_dicts = {}
        node_inputs = {}

        def get_node_inputs(x):
            if x in node_inputs:
                return node_inputs[x]
            else:
                node_inputs[x] = None
                obj = nodes.NODE_CLASS_MAPPINGS.get(x, None)
                if obj is not None:
                    input_types = obj.INPUT_TYPES()
                    node_inputs[x] = input_types
                    return input_types
                else:
                    return None
        if isinstance(info, dict) and 'workflow' in info:
            prompt = json.loads(info['prompt'])
            for (k, v) in prompt.items():
                input_types = get_node_inputs(v['class_type'])
                if input_types is not None:
                    inputs = input_types['required'].copy()
                    if 'optional' in input_types:
                        inputs.update(input_types['optional'])
                    for (name, value) in inputs.items():
                        if name in prompt_blacklist:
                            continue
                        if value[0] == 'STRING' and name in v['inputs']:
                            prompt_dicts[f'{k}.{name.strip()}'] = (v['class_type'], v['inputs'][name])
            for (k, v) in prompt_dicts.items():
                text += f'{k} [{v[0]}] ==> {v[1]}\n'
            positive = prompt_dicts.get(positive_id.strip(), '')
            negative = prompt_dicts.get(negative_id.strip(), '')
        else:
            text = 'There is no prompt information within the image.'
        PromptServer.instance.send_sync('inspire-node-feedback', {'node_id': unique_id, 'widget_name': 'info', 'type': 'text', 'data': text})
        return (positive, negative)
```