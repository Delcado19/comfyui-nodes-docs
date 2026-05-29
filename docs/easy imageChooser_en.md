
# Documentation
- Class name: easy imageChooser
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The easy imageChooser node provides users with the functionality to select specific images from a given batch of images. It integrates user interface components to display images and capture user selections, thereby streamlining the workflow of image processing tasks. This node significantly improves the efficiency of image processing and analysis by allowing users to visually select images of interest.

# Input types
## Optional
- images
    - The images parameter represents the batch of images from which the user can choose. It is essential for the execution of the node, as it determines which images are available for user selection, directly affecting the visual content displayed in the user interface.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The image output parameter returns the tensor of images selected by the user. These selected images can be used for subsequent processing or analysis, making the workflow more flexible and efficient.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ui
    - The ui output parameter contains user interface elements, specifically the images selected by the user. It plays a key role in feeding back the selection results to the user or subsequent processing steps, ensuring that user selections are accurately passed to the next stage of the workflow.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class imageChooser(PreviewImage):
  @classmethod
  def INPUT_TYPES(self):
    return {
      "required":{

      },
      "optional": {
        "images": ("IMAGE",),
      },
      "hidden": {"prompt": "PROMPT", "my_unique_id": "UNIQUE_ID"},
    }

  RETURN_TYPES = ("IMAGE",)
  RETURN_NAMES = ("image",)
  FUNCTION = "chooser"
  OUTPUT_NODE = True
  INPUT_IS_LIST = True
  CATEGORY = "EasyUse/Image"

  last_ic = {}
  @classmethod
  def IS_CHANGED(cls, my_unique_id, **kwargs):
    return cls.last_ic[my_unique_id[0]]

  def tensor_bundle(self, tensor_in: torch.Tensor, picks):
    if tensor_in is not None and len(picks):
      batch = tensor_in.shape[0]
      return torch.cat(tuple([tensor_in[(x) % batch].unsqueeze_(0) for x in picks])).reshape(
        [-1] + list(tensor_in.shape[1:]))
    else:
      return None

  def chooser(self, prompt=None, my_unique_id=None, **kwargs):

    id = my_unique_id[0]
    if id not in ChooserMessage.stash:
      ChooserMessage.stash[id] = {}
    my_stash = ChooserMessage.stash[id]

    # enable stashing. If images is None, we are operating in read-from-stash mode
    if 'images' in kwargs:
      my_stash['images'] = kwargs['images']
    else:
      kwargs['images'] = my_stash.get('images', None)

    if (kwargs['images'] is None):
      return (None, None, None, "")

    images_in = torch.cat(kwargs.pop('images'))
    self.batch = images_in.shape[0]
    for x in kwargs: kwargs[x] = kwargs[x][0]
    result = self.save_images(images=images_in, prompt=prompt)

    images = result['ui']['images']
    PromptServer.instance.send_sync("easyuse-image-choose", {"id": id, "urls": images})

    # wait for selection
    try:
      selections = ChooserMessage.waitForMessage(id, asList=True)
      choosen = [x for x in selections if x >= 0] if len(selections)>1 else [0]
    except ChooserCancelled:
      raise comfy.model_management.InterruptProcessingException()

    return {"ui": {"images": images},
              "result": (self.tensor_bundle(images_in, choosen),)}

```
