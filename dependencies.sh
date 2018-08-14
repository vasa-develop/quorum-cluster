//installing dependencies
sudo apt-get update
sudo apt-get install -y build-essential unzip libdb-dev libleveldb-dev libsodium-dev zlib1g-dev libtinfo-dev sysvbanner wrk wget

//installing go
cd $HOME/ && wget https://storage.googleapis.com/golang/go1.10.1.linux-amd64.tar.gz
tar -xvf go1.10.1.linux-amd64.tar.gz
mkdir $HOME/gopath
echo "export GOPATH=\$HOME/gopath" >> .bashrc
echo "export GOROOT=\$HOME/go" >> .bashrc
echo "export PATH=\$PATH:\$GOROOT/bin" >> .bashrc
source ~/.bashrc

//installing constellation
CVER="0.3.2"
CREL="constellation-$CVER-ubuntu1604"
wget -q https://github.com/jpmorganchase/constellation/releases/download/v$CVER/$CREL.tar.xz
tar xfJ $CREL.tar.xz
sudo cp $CREL/constellation-node /usr/local/bin
sudo chmod 0755 /usr/local/bin/constellation-node
rm -rf $CREL $CREL.tar.xz
constellation-node --version


//installing quorum geth

sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum -y

git clone https://github.com/jpmorganchase/quorum.git
cd quorum
sudo apt install make
make geth
cd $HOME/quorum/build/bin
sudo cp geth /usr/bin/geth
cd $HOME

//installing python3.6
sudo add-apt-repository ppa:jonathonf/python-3.6
sudo apt-get update
sudo apt-get install python3.6 -y
sudo apt install python3-pip -y

//installing web3
pip3 install web3
