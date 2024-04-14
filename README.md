# Group 1 website

Repository for [group 1's website](https://cse125.ucsd.edu/2024/cse125g1/) for CSE 125 2024.

## Development

I recommend editing the website over SSH. This way, we can see updates live.

To connect, do

```shell
$ ssh -p222 <username>@cse125.ucsd.edu
```

Your default password is your PID, but that won't work in a few weeks.

As we learned in CSE 15L, use an SSH key by first creating a `.ssh` directory.

```shell
username@cse125:~$ mkdir .ssh
```

Then, disconnect from SSH and copy your public SSH key to the remote server.

```shell
$ scp -P 222 ~/.ssh/id_rsa.pub <username>@cse125.ucsd.edu:~/.ssh/authorized_keys
```

You can also add an alias the SSH server. On your machine, add the following to `~/.ssh/config`:

```sh
Host cse125
    HostName cse125.ucsd.edu
    User <username>
    Port 222
```

With [VS Code's Remote-SSH extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh), you can then select `cse125` from the remote explorer. Then open `/var/www/html/class/cse125/www/2024/cse125g1` and edit away.

### Installing Node

I recommend using [nvm]() to install Node.

```shell
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Then create `~/.bashrc` and put this in it:

```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Then, restart your terminal and install Node.

```shell
$ nvm install node
```
