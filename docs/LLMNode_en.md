# Documentation
- Class name: LLMNode
- Category: llm
- Output node: True
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

This node facilitates interactive communication with language models, capable of processing user input and generating responses to enable information exchange.

# Input types
## Required
- text
    - Text input is crucial for initiating dialogue with the language model, as it sets the context for the AI's response.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- result
    - Result output contains the language model's response to user input, which is the core outcome of the node's functionality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
```
class LLMNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True})}, 'hidden': {}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'chat'
    CATEGORY = 'llm'
    OUTPUT_IS_LIST = (True,)
    OUTPUT_NODE = True

    def chat(self, text):
        messages_copy = messages.copy()
        messages_copy.append({'role': 'user', 'content': text})
        data = {'messages': messages_copy, 'stops': ['[INST]', '</edit>', '</image>']}
        response = requests.post(url, headers=headers, data=json.dumps(data))
        if response.status_code != 200:
            return {'ui': {'result': [text]}, 'result': ([text],)}
        response_dict = json.loads(response.text)
        last_message = response_dict['messages'][-1]
        if last_message['role'] != 'assistant':
            return {'ui': {'result': [text]}, 'result': ([text],)}
        result = last_message['content']
        last_image_index = result.rfind('<image>')
        if last_image_index != -1:
            result = result[last_image_index + len('<image>'):]
        last_edit_index = result.rfind('<edit>')
        if last_edit_index != -1:
            result = result[last_edit_index + len('<edit>'):]
        print('result: ', result)
        return {'ui': {'result': [result]}, 'result': ([result],)}
```