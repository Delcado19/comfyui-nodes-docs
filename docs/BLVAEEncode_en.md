# Documentation
- Class name: BLVAEEncode
- Category: latent
- Output node: False
- Repo Ref: https://github.com/WASasquatch/WAS_Extras

The BLVAEEncode node is designed to encode images into latent space representations using a Variational Autoencoder (VAE). It provides the functionality to load existing latent representations or encode new representations from input images. The node also offers options for managing latent data, such as storing it for future use or removing it from the workflow.

# Input types
## Required
- vae
    - The VAE parameter is critical for the encoding process, as it represents the Variational Autoencoder model that will be used to convert the input image into a latent representation.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
## Optional
- tiled
    - The tiled parameter determines whether the encoding process should be performed in a tiled manner, which can be beneficial for processing larger images that may not fit entirely into memory when encoded as a whole.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tile_size
    - The tile_size parameter specifies the tile size into which the image will be divided for tiled encoding. This is an important parameter when processing large images that require a tiled approach.
    - Comfy dtype: INT
    - Python dtype: int
- store_or_load_latent
    - The store_or_load_latent parameter controls whether the node should attempt to load a latent representation from the workflow or store a newly encoded latent representation back into the workflow for future use.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- remove_latent_on_load
    - When set to true, the remove_latent_on_load parameter instructs the node to remove the latent representation from the workflow after successfully loading it, to free up space and resources.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- delete_workflow_latent
    - When set to true, the delete_workflow_latent parameter instructs the node to delete any existing latent representations in the workflow, regardless of whether a new representation is being encoded.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- image
    - The image parameter is the input image to be encoded into the latent space. This is a mandatory parameter when there is no existing latent representation that can be loaded from the workflow.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- extra_pnginfo
    - The extra_pnginfo parameter is used to store and retrieve additional information related to the image, such as metadata or other auxiliary data that may be required by the encoding process.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]
- unique_id
    - The unique_id parameter is a unique identifier for the node instance in the workflow, used for managing the storage and retrieval of latent representations.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- latent
    - The latent parameter represents the encoded latent space representation of the input image. It is the primary output of the BLVAEEncode node and is used for further processing or analysis in the workflow.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class BLVAEEncode:

    def __init__(self):
        self.VAEEncode = nodes.VAEEncode()
        self.VAEEncodeTiled = nodes.VAEEncodeTiled()
        self.last_hash = None

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'vae': ('VAE',), 'tiled': ('BOOLEAN', {'default': False}), 'tile_size': ('INT', {'default': 512, 'min': 320, 'max': 4096, 'step': 64}), 'store_or_load_latent': ('BOOLEAN', {'default': True}), 'remove_latent_on_load': ('BOOLEAN', {'default': True}), 'delete_workflow_latent': ('BOOLEAN', {'default': False})}, 'optional': {'image': ('IMAGE',)}, 'hidden': {'extra_pnginfo': 'EXTRA_PNGINFO', 'unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('LATENT',)
    RETURN_NAMES = ('latent',)
    FUNCTION = 'encode'
    CATEGORY = 'latent'

    def encode(self, vae, tiled, tile_size, store_or_load_latent, remove_latent_on_load, delete_workflow_latent, image=None, extra_pnginfo=None, unique_id=None):
        workflow_latent = None
        latent_key = f'latent_{unique_id}'
        if self.last_hash and torch.is_tensor(image):
            if self.last_hash is not self.sha256(image):
                delete_workflow_latent = True
        if torch.is_tensor(image):
            self.last_hash = self.sha256(image)
        if delete_workflow_latent:
            if extra_pnginfo['workflow']['extra'].__contains__(latent_key):
                try:
                    del extra_pnginfo['workflow']['extra'][latent_key]
                except Exception:
                    print(f'Unable to delete latent image from workflow node: {unqiue_id}')
                    pass
        if store_or_load_latent and unique_id:
            if latent_key in extra_pnginfo['workflow']['extra']:
                print(f'Loading latent image from workflow node: {unique_id}')
                try:
                    workflow_latent = self.deserialize(extra_pnginfo['workflow']['extra'][latent_key])
                except Exception as e:
                    print('There was an issue extracting the latent tensor from the workflow. Is it corrupted?')
                    workflow_latent = None
                    if not torch.is_tensor(image):
                        raise ValueError(f'Node {unique_id}: There was no image provided, and workflow latent missing. Unable to proceed.')
                if workflow_latent and remove_latent_on_load:
                    try:
                        del extra_pnginfo['workflow']['extra'][latent_key]
                    except Exception:
                        pass
        if workflow_latent:
            print(f'Loaded workflow latent from node: {unique_id}')
            return (workflow_latent, {'extra_pnginfo': extra_pnginfo})
        if not torch.is_tensor(image):
            raise ValueError(f'Node {unique_id}: No workflow latent was loaded, and no image provided to encode. Unable to proceed. ')
        if tiled:
            encoded = self.VAEEncodeTiled.encode(pixels=image, tile_size=tile_size, vae=vae)
        else:
            encoded = self.VAEEncode.encode(pixels=image, vae=vae)
        if store_or_load_latent and unique_id:
            print(f'Saving latent to workflow node {unique_id}')
            new_workflow_latent = self.serialize(encoded[0])
            extra_pnginfo['workflow']['extra'][latent_key] = new_workflow_latent
        return (encoded[0], {'extra_pnginfo': extra_pnginfo})

    def sha256(self, tensor):
        tensor_bytes = tensor.cpu().contiguous().numpy().tobytes()
        hash_obj = hashlib.sha256()
        hash_obj.update(tensor_bytes)
        return hash_obj.hexdigest()

    def serialize(self, obj):
        json_str = json.dumps(obj, default=lambda o: {'__tensor__': True, 'value': o.cpu().numpy().tolist()} if torch.is_tensor(o) else o.__dict__)
        compressed_data = zlib.compress(json_str.encode('utf-8'))
        base64_encoded = base64.b64encode(compressed_data).decode('utf-8')
        return base64_encoded

    def deserialize(self, base64_str):
        compressed_data = base64.b64decode(base64_str)
        json_str = zlib.decompress(compressed_data).decode('utf-8')
        obj = json.loads(json_str, object_hook=lambda d: torch.tensor(d['value']) if '__tensor__' in d else d)
        return obj
```