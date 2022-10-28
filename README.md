# Running Node.js application service with systemd

This document describes how to run a Node.js application as a service using systemd.

## Prerequisites

- A Node.js application to run as a service.

## Create a service file

Create a service file named `node-app.service` in the `/etc/systemd/system/` OR `/lib/systemd/system/` directory using the following command:

```bash
sudo nano /lib/systemd/system/node-app.service
```

Add the following content to the service file:

```bash
[Unit]
Description=Process Manager SystemD Service for Node Application After=network.target
After=network.target

[Service]
Environment=NODE_PORT=3001
Type=simple
User=ameya
ExecStart=/usr/bin/node /home/ameya/AmeyaJain-25/Process-Manager/pm-node-app/index.js
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

## Reload systemd

```bash
sudo systemctl daemon-reload
```

## Start the service

```bash
sudo systemctl start node-app
```

## Check the status of the service

```bash
sudo systemctl status node-app.service
```

## Stop the service

```bash
sudo systemctl stop node-app.service
```

## Restart the service

```bash
sudo systemctl restart node-app.service
```

## Enable and start the service

```bash
sudo systemctl enable node-app.service
sudo systemctl start node-app.service
```

## Disable the service

```bash
sudo systemctl disable node-app.service
```

## Explanation of the service file

The service file contains the following sections:

- `[Unit]` section: This section contains the description of the service and the dependencies of the service.

  - Description: This is a description of the service.

  - After: This is the dependency of the service. In this case, the service will start after the network is up.

- `[Service]` section: This section contains the service type, user, and the command to run the service.

  - **_Environment_**: This is the environment variable for the service.

  - **_Type_**: This is the type of the service. In this case, it is a simple service. It will fork and run in the background. If you want to run the service as a daemon, you can use Type=forking.

  - **_User_**: This is the user that will be used to run the service. This user must have the permission to run the service. (It can be root, ubuntu, or any other user.)

  - **_ExecStart_**: This is the command that will be used to start the service. `/usr/bin/node` is the path to the node binary. `/home/ameya/AmeyaJain-25/Process-Manager/pm-node-app/index.js` is the path to the node application.

  - **_Restart_**: This is the restart policy. If the service fails, it will be restarted. You can also use Restart=always to restart the service even if it is stopped manually.

- `[Install]` section: This section contains the information about the service to be enabled at boot time.

  - **_WantedBy_**: This is the target that the service will be enabled at boot time. In this case, it is multi-user.target.
