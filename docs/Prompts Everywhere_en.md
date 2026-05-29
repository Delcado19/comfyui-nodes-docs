
# Documentation
- Class name: Prompts Everywhere
- Category: everywhere
- Output node: True
- Repo Ref: https://github.com/Formfox/comfy-nodes

The "Prompts Everywhere" node is designed for flexible integration of positive and negative prompts. It applies to a wide range of scenarios, supports diverse input types, and imposes no strict restrictions on input format or content. This design allows users to freely apply prompts in various situations, enhancing the node's versatility and adaptability.

# Input types
## Optional
- +ve
    - Represents positive prompts, which can be of any type and quantity. This flexibility allows users to broadly and freely specify inputs that contribute positively to the operation.
    - Comfy dtype: *
    - Python dtype: Any
- -ve
    - Represents negative prompts, also of any type and quantity. This provides a way for users to specify inputs that should be treated as negative or excluded from the operation.
    - Comfy dtype: *
    - Python dtype: Any

# Output types
The node has no output type.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AnythingEverywherePrompts(Base):
    @classmethod
    def INPUT_TYPES(s):
        return {"required":{}, 
                "optional": { "+ve" : ("*", {}), "-ve" : ("*", {}), } }
    
    def func(self, **kwargs):
        return ()

```
