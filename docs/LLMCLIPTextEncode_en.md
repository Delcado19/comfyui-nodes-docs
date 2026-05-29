# Documentation
- Class name: LLMCLIPTextEncode
- Category: llm
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

This node encodes text input using the CLIP model and integrates conversational elements to enrich downstream task context.

# Input types
## Required
- clip
- The clip parameter is essential; it represents the CLIP model itself, enabling the text encoding process and supplying contextual information.
    - Comfy dtype: CLIP
    - Python dtype: CLIPModel
- text
- The text parameter is critical for the node's operation, as it is the input data the node processes and encodes.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- CONDITIONING
- The output provides a conditioned representation that can serve as context for further processing or as a basis for generating responses.
    - Comfy dtype: POOLED_OUTPUT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class LLMCLIPTextEncode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'clip': ('CLIP',), 'text': ('STRING', {'multiline': True})}, 'hidden': {}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'chat'
    CATEGORY = 'llm'

    def chat(self, clip, text):
        messages_copy = messages.copy()
        messages_copy.append({'role': 'user', 'content': text})
        data = {'messages': messages_copy, 'stops': ['[INST]', '</edit>', '</image>']}
        response = requests.post(url, headers=headers, data=json.dumps(data))
        if response.status_code != 200:
            (cond, pooled) = clip.encode_from_tokens(clip.tokenize(text), return_pooled=True)
            return ([[cond, {'pooled_output': pooled}]],)
        response_dict = json.loads(response.text)
        last_message = response_dict['messages'][-1]
        if last_message['role'] != 'assistant':
            (cond, pooled) = clip.encode_from_tokens(clip.tokenize(text), return_pooled=True)
            return ([[cond, {'pooled_output': pooled}]],)
        result = last_message['content']
        last_image_index = result.rfind('<image>')
        if last_image_index != -1:
            result = result[last_image_index + len('<image>'):]
        last_edit_index = result.rfind('<edit>')
        if last_edit_index != -1:
            result = result[last_edit_index + len('<edit>'):]
        print('result: ', result)
        tokens = clip.tokenize(result)
        (cond, pooled) = clip.encode_from_tokens(tokens, return_pooled=True)
        return ([[cond, {'pooled_output': pooled}]],)
```