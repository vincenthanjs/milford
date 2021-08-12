 si = connect.SmartConnect(host="vcsa-01a.corp.tanzu", user="administrator@vsphere.local", pwd="VMware1!", sslContext=context)


context = ssl.SSLContext(ssl.PROTOCOL_SSLv23)
try:
    si = connect.SmartConnect(host="vcsa-01a.corp.tanzu",
                                user="administrator@vsphere.local",
                                pwd="VMware1!",
                                sslContext=context)
except:
    module.fail_json(msg='Could not connect to vcenter.')

content = si.RetrieveContent()
object_view = content.viewManager.CreateContainerView(content.rootFolder, [], True)
for obj in object_view.view:
    if isinstance(obj, vim.HostSystem):
        if obj.name.lower() == esxi.lower():
            object_view.Destroy()
            Host_sytem = obj