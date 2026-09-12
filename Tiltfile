# TDK Enterprise ERP System Tiltfile
# 100 Microservices Across Finance, HR, Inventory, Sales, Manufacturing, Supply Chain, Analytics

v1alpha1.extension_repo(name='tdk-cli', url='https://github.com/tdk-landscape/tdk-cli')
v1alpha1.extension(name='tdk-cli', repo_name='tdk-cli', repo_path='')

load('ext://tdk-cli', 'Utils', 'Manifest', 'Config')

print("TDK Enterprise ERP System Landscape")
print("   Project -> Stacks: finance, hr, inventory, sales, manufacturing, supply_chain, analytics")
print("   Resources: 100 enterprise microservice resources")
print("")

config.define_string_list("to-run", args=True)
cfg = config.parse()
